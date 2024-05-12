import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  useCheckOutCurseMutation,
  useGetCouresIdQuery,
} from "../../Services/courses";
import { useNavigate, useSearchParams } from "react-router-dom";

const CheckOut = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(userInfo, "userInfofasd");
  const navigate = useNavigate();
  const { data: courseData, refetch } = useGetCouresIdQuery(id);
  const [cehckOutCourse] = useCheckOutCurseMutation();

  const {
    handleSubmit: handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  React.useEffect(() => {
    if (!userInfo) {
      navigate("/Login");
    }
  }, []);

  const onSubmit = async (formData) => {
    console.log(formData, "formData324523");
    if (scriptLoaded) {
      const options = {
        key: "rzp_live_CYbOpmWaZHk54C",
        amount: courseData?.data?.coursePrice * 100, // amount in paisa
        currency: "INR",
        name: "Krosume",
        description: "For Course Payment",
        image: "../src/assets/img/logo/logo_1.png",
        handler: function (response: any) {
          console.log(response, "43523response");
          const paymentId = response.razorpay_payment_id;
          if (paymentId) {
            afterPaymentSuccess(formData);
          }
        },
        prefill: {
          name: `${formData?.firstName} ${formData?.lastName}`,
          email: formData?.emailId,
          contact: formData?.phoneNumber,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay script not loaded");
    }
  };

  const afterPaymentSuccess = async (formData) => {
    try {
      let tempData = {
        ...formData,
        courseName: courseData?.data?.courseName,
        subTotal: courseData?.data?.coursePrice,
        paymentType: null,
        paymentStatus: null,
        courseId: courseData?.data?.id,
        userName: userInfo?.userName,
        customerId: userInfo?.id,
      };
      let result = await cehckOutCourse(tempData);
      if (result) {
        navigate("/User/Course");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  return (
    <div>
      <div className="breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper">
                <div className="breadcrumb__title">
                  <h2 className="heading">Checkout</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape__icon__2">
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__1"
            src="/./src/assets/img/herobanner/herobanner__1.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__2"
            src="/./src/assets/img/herobanner/herobanner__2.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__3"
            src="/./src/assets/img/herobanner/herobanner__3.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__4"
            src="/./src/assets/img/herobanner/herobanner__5.png"
            alt="photo"
          />
        </div>
      </div>
      <div className="checkoutarea sp_bottom_100 sp_top_100">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="checkoutarea__billing">
                  <div className="checkoutarea__billing__heading">
                    <h2>Billing Details</h2>
                  </div>
                  <div className="checkoutarea__billing__form">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="first__name">First Name *</label>
                          <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.firstName?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="last__name">Last Name*</label>
                          <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.lastName?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="email__address">Email Address*</label>
                          <Controller
                            name="emailId"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.emailId?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="email__address">Phome Number*</label>
                          <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="number" {...field} />
                            )}
                          />
                          {errors.phoneNumber?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="address__info">Address *</label>
                          <Controller
                            name="address"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.address?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="town__city">Town/City *</label>
                          <Controller
                            name="city"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.city?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="checkoutarea__inputbox">
                          <label htmlFor="post__code">
                            Post Code/Zip Code*
                          </label>
                          <Controller
                            name="zipCode"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input type="text" {...field} />
                            )}
                          />
                          {errors.zipCode?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="checkoutarea__payment__wraper">
                  <div className="checkoutarea__total">
                    <h3>Your order</h3>
                    <div className="checkoutarea__table__wraper">
                      <table className="checkoutarea__table">
                        <thead>
                          <tr className="checkoutarea__item">
                            <td className="checkoutarea__ctg__type">
                              {" "}
                              Course :{" "}
                            </td>
                            <td className="checkoutarea__cgt__des">
                              {" "}
                              {courseData?.data?.courseTitle}
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr className="checkoutarea__item">
                            <td className="checkoutarea__itemcrt-total">
                              {" "}
                              Course Cost :
                            </td>
                            <td className="checkoutarea__cgt__des prc-total">
                              RS: {courseData?.data?.coursePrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="checkoutarea__payment clearfix">
                    <div className="checkoutarea__payment__toggle">
                      <div className="checkoutarea__payment__input__box">
                        <button className="default__button" type="submit">
                          Get Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
