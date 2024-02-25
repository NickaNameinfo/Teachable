"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import { useGetCheckOutCouresQuery, useGetCouresQuery } from "../Services/courses";
import { useGetStudentQuery } from "../Services/student";

const Dashboard = ({ params }: { params: { slug: string } }) => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  console.log(userInfo, "userInfo34532")
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
  } = useGetCouresQuery();
  const {
    data: student,
    error: studentError,
    isLoading: studentLoading,
  } = useGetStudentQuery();
  const { data: checkOutData, refetch } = useGetCheckOutCouresQuery();
  if (courseLoading) {
    return <div>Loading...</div>;
  }

  console.log(checkOutData, "checkOutData234")

  return (
    <div>
      <div className="dashboardarea sp_bottom_100">
        <div className="container-fluid full__width__padding">
          <div className="row">
            <div className="col-xl-12">
              <div className="dashboardarea__wraper">
                <div className="dashboardarea__img">
                  <div className="dashboardarea__inner admin__dashboard__inner">
                    <div className="dashboardarea__left">
                      <div className="dashboardarea__left__img">
                        <img
                          loading="lazy"
                          src="../img/dashbord/dashbord__2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="dashboardarea__left__content">
                        <h5>Hello</h5>
                        <h4>
                          {userInfo?.firstName} {userInfo?.lastName}
                        </h4>
                      </div>
                    </div>
                    <div className="dashboardarea__star">
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <i className="icofont-star" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>4.0 (120 Reviews)</span>
                    </div>
                    <div className="dashboardarea__right">
                      <div className="dashboardarea__right__button">
                        <Link
                          className="default__button"
                          href="/Dashboard/Course/CreateCourse/add"
                        >
                          Create a New Course
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-right"
                          >
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="container-fluid full__width__padding">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="dashboard__content__wraper">
                  <div className="dashboard__section__title">
                    <h4>Dashboard</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../img/counter/counter__1.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">{checkOutData?.["data"]?.data?.length}</span>
                            </div>
                            <p>Enrolled Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../img/counter/counter__2.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">
                                {
                                  courseData?.["data"]?.data?.filter(
                                    (result) => result.courseStatus === "Active"
                                  ).length
                                }
                              </span>
                              {/* + */}
                            </div>
                            <p>Active Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../img/counter/counter__3.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">300</span>k
                            </div>
                            <p>Complete Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../img/counter/counter__4.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">
                                {courseData?.["data"]?.data.length}
                              </span>
                              {/* + */}
                            </div>
                            <p>Total Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                      <div className="dashboard__single__counter">
                        <div className="counterarea__text__wraper">
                          <div className="counter__img">
                            <img
                              loading="lazy"
                              src="../img/counter/counter__3.png"
                              alt="counter"
                            />
                          </div>
                          <div className="counter__content__wraper">
                            <div className="counter__number">
                              <span className="counter">
                                {student?.["data"]?.data.length}
                              </span>
                              {/* k */}
                            </div>
                            <p>Total Students</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;
