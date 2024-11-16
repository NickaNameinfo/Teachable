import axios from "axios";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/index";
import { login } from "./loginSlice";
import { infoData } from "../configData";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit: handleSubmitLogin,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  const {
    handleSubmit: handleSubmitSignup,
    control: controlSignup,
    watch,
    formState: { errors: errorsSignup },
  } = useForm();

  React.useEffect(() => {
    if (userInfo) {
      localStorage.setItem("loginInfo", JSON.stringify(userInfo));
      navigate("/");
    }
  }, [userInfo]);

  const onSubmitLogin = async (formData) => {
    try {
      const response = await axios.post(
        `${infoData?.baseApi}/customers/authenticate`,
        formData
      );
      console.log(formData, "formData32134", response);
      if (response.data.success && !response?.data?.data?.error) {
        dispatch(login(response?.data?.data));
      } else {
        alert("User name or password is incorrect");
      }
    } catch (error) {
      alert("User name or password is incorrect");
    }
  };
  const changePassword = async (formData) => {
    console.log(formData, "formDataformData");
    try {
      const response = await axios.post(
        `${infoData?.baseApi}/customers/resetPassword`,
        formData
      );
      console.log(formData, "formData32134", response);
      if (response.data.success && !response?.data?.data?.error) {
        alert("Paasword Reset Success");
        location.reload()
      } else {
        alert("User name is incorrect");
      }
    } catch (error) {
      alert("User name incorrect");
    }
  };

  const onSubmitSignup = async (formData) => {
    try {
      let tempData = {
        ...formData,
        fullName: "User",
      };
      await axios.post(`${infoData?.baseApi}/customers`, tempData);
      location.reload();
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  return (
    <div>
      <div className="loginarea mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 offset-md-2" data-aos="fade-up">
              <ul
                className="nav  tab__button__wrap text-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link active"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__one"
                    type="button"
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__two"
                    type="button"
                  >
                    Sing up
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="single__tab__link"
                    data-bs-toggle="tab"
                    data-bs-target="#projects__three"
                    type="button"
                  >
                    Forget Password
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="tab-content tab__content__wrapper"
              id="myTabContent"
              data-aos="fade-up"
            >
              <div
                className="tab-pane fade active show"
                id="projects__one"
                role="tabpanel"
                aria-labelledby="projects__one"
              >
                <div className="col-xl-8 col-md-8 offset-md-2">
                  <div className="loginarea__wraper">
                    <div className="login__heading">
                      <h5 className="login__title">Login</h5>
                    </div>
                    <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                      <div className="login__form">
                        <label className="form__label">Username</label>
                        <Controller
                          name="userName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="common__login__input"
                              placeholder="User Name"
                              {...field}
                            />
                          )}
                        />
                        {errorsLogin.userName?.type === "required" && (
                          <p role="alert" className="error">
                            User name is required
                          </p>
                        )}
                      </div>
                      <div className="login__form">
                        <label className="form__label">Password</label>
                        <Controller
                          name="password"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="password"
                              className="common__login__input"
                              placeholder="Password"
                              {...field}
                            />
                          )}
                        />
                        {errorsLogin.password?.type === "required" && (
                          <p role="alert" className="error">
                            Password is required
                          </p>
                        )}
                      </div>

                      <div className="login__button">
                        <div className="create__course__bottom__button">
                          <button type="submit">Log In</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="projects__two"
                role="tabpanel"
                aria-labelledby="projects__two"
              >
                <div className="col-xl-8 offset-md-2">
                  <div className="loginarea__wraper">
                    <div className="login__heading">
                      <h5 className="login__title">Sing Up</h5>
                    </div>
                    <form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">First Name</label>
                            <Controller
                              name="firstName"
                              control={controlSignup}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="First Name"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.firstName?.type === "required" && (
                              <p role="alert" className="error">
                                First name is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">Last Name</label>
                            <Controller
                              name="lastName"
                              control={controlSignup}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="Last Name"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.lastName?.type === "required" && (
                              <p role="alert" className="error">
                                Last name is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">Username</label>
                            <Controller
                              name="userName"
                              control={controlSignup}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="User Name"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.userName?.type === "required" && (
                              <p role="alert" className="error">
                                User Name is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">Email</label>
                            <Controller
                              name="email"
                              control={controlSignup}
                              rules={{
                                required: "Email is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Invalid email address",
                                },
                              }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="Email Id"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.email && (
                              <p role="alert" className="error">
                                {String(errorsSignup.email?.message)}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">Phone Number</label>
                            <Controller
                              name="phoneNumber"
                              control={controlSignup}
                              rules={{
                                required: "Mobile number is required",
                                maxLength: {
                                  value: 10,
                                  message: "Mobile number must be 10 digits",
                                },
                                pattern: {
                                  value: /^\d{10}$/,
                                  message: "Invalid mobile number format",
                                },
                              }}
                              render={({ field }) => (
                                <input
                                  type="number"
                                  className="common__login__input"
                                  placeholder="Phone Number"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.phoneNumber && (
                              <p role="alert" className="error">
                                {String(errorsSignup.phoneNumber?.message)}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">Password</label>
                            <Controller
                              name="password"
                              control={controlSignup}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="Password"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.password?.type === "required" && (
                              <p role="alert" className="error">
                                Password is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="login__form">
                            <label className="form__label">
                              Re-Enter Password
                            </label>
                            <Controller
                              name="reEnterPassword"
                              control={controlSignup}
                              rules={{
                                required: true,
                                validate: (value) =>
                                  value === watch("password") ||
                                  "Passwords do not match",
                              }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="common__login__input"
                                  placeholder="Re-Enter Password"
                                  {...field}
                                />
                              )}
                            />
                            {errorsSignup.reEnterPassword?.type ===
                              "required" && (
                              <p role="alert" className="error">
                                Re-Enter Password is required
                              </p>
                            )}
                            {errorsSignup.reEnterPassword?.type ===
                              "validate" && (
                              <p role="alert" className="error">
                                {String(errorsSignup.reEnterPassword.message)}{" "}
                                {/* Convert to string */}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="login__form d-flex justify-content-between flex-wrap gap-2">
                        <div className="form__check">
                          <input id="accept_pp" type="checkbox" />{" "}
                          <label htmlFor="accept_pp">
                            Accept the Terms and Privacy Policy
                          </label>
                        </div>
                      </div>
                      <div className="login__button">
                        <div className="create__course__bottom__button">
                          <button type="submit">Sign Up</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade active"
                id="projects__three"
                role="tabpanel"
                aria-labelledby="projects__three"
              >
                <div className="col-xl-8 col-md-8 offset-md-2">
                  <div className="loginarea__wraper">
                    <div className="login__heading">
                      <h5 className="login__title">Forget Password</h5>
                    </div>
                    <form onSubmit={handleSubmitLogin(changePassword)}>
                      <div className="login__form">
                        <label className="form__label">Username</label>
                        <Controller
                          name="userName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="common__login__input"
                              placeholder="User Name"
                              {...field}
                            />
                          )}
                        />
                        {errorsLogin.userName?.type === "required" && (
                          <p role="alert" className="error">
                            User name is required
                          </p>
                        )}
                      </div>
                      <div className="login__form">
                        <label className="form__label">Password</label>
                        <Controller
                          name="password"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="common__login__input"
                              placeholder="Password"
                              {...field}
                            />
                          )}
                        />
                        {errorsLogin.password?.type === "required" && (
                          <p role="alert" className="error">
                            Password is required
                          </p>
                        )}
                      </div>
                      <div className="login__button">
                        <div className="create__course__bottom__button">
                          <button type="submit">Update Password</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
