import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  console.log(userInfo , "3254523")
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="headerarea headerarea__3">
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo">
                    <Link to="/">
                      <img
                        loading="lazy"
                        src="./src/assets/img/logo/logo_1.png"
                        alt="logo"
                        width={200}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-7 main_menu_wrap">
                <div className="headerarea__main__menu">
                  <nav>
                    <ul>
                      <li>
                        <div className="headerarea">
                          <Link to="/" className="headerarea__has__dropdown">
                            Home
                          </Link>
                        </div>
                      </li>
                      {userInfo?.fullName === "User" && (
                        <li>
                          <div className="headerarea">
                            <Link
                              to="/User"
                              className="headerarea__has__dropdown"
                            >
                              My Profile
                            </Link>
                          </div>
                        </li>
                      )}
                      {userInfo?.fullName === "Admin" && (
                        <>
                          <li>
                            <div className="headerarea">
                              <Link
                                to="/Dashboard"
                                className="headerarea__has__dropdown"
                              >
                                Dashboard
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="headerarea">
                              <Link
                                to="/Dashboard/Messages"
                                className="headerarea__has__dropdown"
                              >
                                Message
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="headerarea">
                              <Link
                                to="/Dashboard/Course/CourseList"
                                className="headerarea__has__dropdown"
                              >
                                Courses
                              </Link>
                            </div>
                          </li>
                        </>
                      )}

                      {userInfo?.fullName === "User" && (
                        <li>
                          <div className="headerarea">
                            <Link
                              to="/User/Course"
                              className="headerarea__has__dropdown"
                            >
                              Enrolled Courses
                            </Link>
                          </div>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-1 col-lg-3 col-md-6">
                <div className="headerarea__right">
                  <div className="headerarea__login cursor-pointer">
                    {userInfo?.fullName === "User" ||
                    userInfo?.fullName === "Admin" ? (
                      <i
                        className="icofont-logout cursor-pointer"
                        onClick={() => {
                          location.reload();
                          localStorage.removeItem("loginInfo");
                          navigate("/");
                        }}
                      ></i>
                    ) : (
                      <Link to="/Login">
                        <i className="icofont-user-alt-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mob_menu_wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <Link className="logo__dark" to="#">
                    <img loading="lazy" src="/./src/assets/img/logo/logo_1.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <div className="mobile-off-canvas">
                    <Link className="mobile-aside-button" to="#">
                      <i className="icofont-navigation-menu" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-off-canvas-active">
        <Link className="mobile-aside-close" to="#">
          <i className="icofont  icofont-close-line" />
        </Link>
        <div className="header-mobile-aside-wrap">
          <div className="mobile-search">
            <form className="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button className="button-search">
                <i className="icofont icofont-search-2" />
              </button>
            </form>
          </div>
          <div className="mobile-menu-wrap headerarea">
            <div className="mobile-navigation">
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <Link to="#">Home</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mobile-curr-lang-wrap">
            <div className="single-mobile-curr-lang">
              <Link className="mobile-account-active" to="#">
                My Account <i className="icofont-thin-down" />
              </Link>
              <div className="lang-curr-dropdown account-dropdown-active">
                <ul>
                  <li>
                    <Link to="#">Login</Link>
                  </li>
                  <li>
                    <Link to="#">/ Create Account</Link>
                  </li>
                  <li>
                    <Link to="#">My Account</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
