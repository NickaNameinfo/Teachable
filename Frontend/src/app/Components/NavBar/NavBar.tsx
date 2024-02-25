"use client";
import { RootState } from "@/app/Store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const router = useRouter();
  return (
    <>
      <header>
        <div className="headerarea headerarea__3">
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo">
                    <Link href="/">
                      <img
                        loading="lazy"
                        src="/img/logo/logo_1.png"
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
                          <Link href="/" className="headerarea__has__dropdown">
                            Home
                          </Link>
                        </div>
                      </li>
                      {userInfo?.fullName === "User" && (
                        <li>
                          <div className="headerarea">
                            <Link
                              href="/User"
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
                                href="/Dashboard"
                                className="headerarea__has__dropdown"
                              >
                                Dashboard
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="headerarea">
                              <Link
                                href="/Dashboard/Messages"
                                className="headerarea__has__dropdown"
                              >
                                Message
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="headerarea">
                              <Link
                                href="/Dashboard/Course/CourseList"
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
                              href="/User/Course"
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
                          router.push("/");
                        }}
                      ></i>
                    ) : (
                      <Link href="/Login">
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
                  <a className="logo__dark" href="#">
                    <img loading="lazy" src="/img/logo/logo_1.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <div className="mobile-off-canvas">
                    <a className="mobile-aside-button" href="#">
                      <i className="icofont-navigation-menu" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-off-canvas-active">
        <a className="mobile-aside-close">
          <i className="icofont  icofont-close-line" />
        </a>
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
                    <a href="#">Home</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mobile-curr-lang-wrap">
            <div className="single-mobile-curr-lang">
              <a className="mobile-account-active" href="#">
                My Account <i className="icofont-thin-down" />
              </a>
              <div className="lang-curr-dropdown account-dropdown-active">
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">/ Create Account</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
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
