"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import { useGetCheckOutCouresQuery } from "../Services/courses";

const User = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const { data: checkOutData, error: checkOutError } =
    useGetCheckOutCouresQuery();

  console.log(userInfo, "userInfofasd", checkOutData);
  return (
    <div>
      <div className="dashboardarea sp_bottom_100 mt-5">
        <div className="container-fluid full__width__padding">
          <div className="row">
            <div className="col-xl-12">
              <div className="dashboardarea__wraper">
                <div className="dashboardarea__img">
                  <div className="dashboardarea__inner student__dashboard__inner">
                    <div className="dashboardarea__left">
                      <div className="dashboardarea__left__img">
                        <img
                          loading="lazy"
                          src="../img/teacher/teacher__2.png"
                          alt=""
                        />
                      </div>
                      <div className="dashboardarea__left__content">
                        <h4>
                          {userInfo?.firstName} {userInfo?.lastName}
                        </h4>
                        <ul>
                          <li>
                            {" "}
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
                              className="feather feather-book-open me-2"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            Enrolled Courses :  <span className="me-3">
                            {
                              checkOutData?.["data"]?.data?.filter(
                                (res) => res.customerId === userInfo?.id
                              ).length
                            }</span>
                          </li>
                          {/* <li>
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
                              className="feather feather-award"
                            >
                              <circle cx={12} cy={8} r={7} />
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            8 Certificate
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="dashboardarea__right">
                      <div className="dashboardarea__right__button">
                        <Link className="default__button" href="/">
                          Enroll A New Course
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
        {/* <div className="dashboard">
          <div className="container-fluid full__width__padding">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="dashboard__content__wraper">
                  <div className="dashboard__section__title">
                    <h4>Course List</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="dashboard__table table-responsive">
                        <table>
                          <thead>
                            <tr>
                              <th>Course Name</th>
                              <th>Enrolled</th>
                            </tr>
                          </thead>
                          <tbody>
                            {checkOutData?.["data"]?.data?.map((result) => (
                              <tr>
                                <th>
                                  <Link href="#">{result?.courseName}</Link>
                                </th>
                                <td>Active</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default User;
