"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  useCheckOutCurseMutation,
  useGetCouresIdQuery,
} from "../../Services/courses";

const CheckOut = ({ params }: { params: { slug: string } }) => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  console.log(userInfo, "userInfofasd");
  const router = useRouter();
  const { data: courseData, refetch } = useGetCouresIdQuery(params.slug);
  const [cehckOutCourse] = useCheckOutCurseMutation();

  const {
    handleSubmit: handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    if (!userInfo) {
      router.push("/Login");
    }
  }, []);

  const onSubmit = async (formData) => {
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
        router.push("/User/Course");
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
            src="/img/herobanner/herobanner__1.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__2"
            src="/img/herobanner/herobanner__2.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__3"
            src="/img/herobanner/herobanner__3.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className=" shape__icon__img shape__icon__img__4"
            src="/img/herobanner/herobanner__5.png"
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
                      <div className="col-xl-12">
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
                              {courseData?.data?.coursePrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="checkoutarea__payment clearfix">
                    <div className="checkoutarea__payment__toggle">
                      <div className="checkoutarea__payment__total">
                        <div className="checkoutarea__payment__type">
                          <input type="radio" id="pay-toggle03" name="pay" />
                          <label htmlFor="pay-toggle03">Cash on Delivery</label>
                        </div>
                        <div className="checkoutarea__payment__type">
                          <input type="radio" id="pay-toggle04" name="pay" />
                          <label htmlFor="pay-toggle04">Paypal</label>
                        </div>
                      </div>
                      <div className="checkoutarea__payment__input__box">
                        <button className="default__button" type="submit">
                          Place order
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
