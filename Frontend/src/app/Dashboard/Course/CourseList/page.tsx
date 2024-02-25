"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { infoData } from "../../../../../configData";
import {
  useDeleteCorseMutation,
  useGetCouresQuery,
  useGetSessionQuery,
} from "@/app/Services/courses";
import { useRouter } from "next/navigation";

const CourseList = () => {
  const [deleteCourse] = useDeleteCorseMutation();
  const [groupedData, setGroupedDate] = React.useState(null);

  const router = useRouter();
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
    refetch,
  } = useGetCouresQuery();

  const {
    data: sessionData,
    error: sessionError,
    isLoading: sessionLoading,
    refetch: sessionRefetch,
  } = useGetSessionQuery();

  React.useEffect(() => {
    // Group data based on courseId
    const groupedData = sessionData?.["data"]?.data?.reduce((acc, item) => {
      const courseId = item.courseId;

      if (!acc[courseId]) {
        acc[courseId] = {
          items: [item],
          totalSessionTime: parseInt(item.sessionTime, 10),
        };
      } else {
        acc[courseId].items.push(item);
        acc[courseId].totalSessionTime += parseInt(item.sessionTime, 10);
      }

      return acc;
    }, {});
    setGroupedDate(groupedData);
  }, [sessionData]);

  React.useEffect(() => {
    refetch();
  }, []);

  console.log(courseData, "courseData2323");

  if (courseLoading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (courseId) => {
    console.log(courseId, "courseIdsdfas");
    try {
      // Call the delete mutation
      const result = deleteCourse(courseId);
      // If successful, refetch the course data
      if (result) {
        refetch();
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div>
      <div className="dashboard">
        <div className="container-fluid full__width__padding">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="dashboard__content__wraper">
                <div className="dashboard__section__title">
                  <h4>Course Status</h4>
                </div>
                <div className="row">
                  <div
                    className="col-xl-12 aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <ul
                      className="nav  about__button__wrap dashboard__button__wrap"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="single__tab__link active"
                          data-bs-toggle="tab"
                          data-bs-target="#projects__one"
                          type="button"
                          aria-selected="true"
                          role="tab"
                        >
                          Publish
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="single__tab__link"
                          data-bs-toggle="tab"
                          data-bs-target="#projects__two"
                          type="button"
                          aria-selected="false"
                          role="tab"
                          tabIndex={-1}
                        >
                          Pending
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content tab__content__wrapper aos-init aos-animate"
                    id="myTabContent"
                    data-aos="fade-up"
                  >
                    <div
                      className="tab-pane fade active show"
                      id="projects__one"
                      role="tabpanel"
                      aria-labelledby="projects__one"
                    >
                      <div className="row mb-3">
                        {courseData?.["data"]?.data
                          ?.filter((result) => result.courseStatus === "Active")
                          ?.map((result) => (
                            <div
                              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3"
                              key={result?.id}
                            >
                              <div className="gridarea__wraper">
                                <div className="gridarea__img">
                                  <Link
                                    href={`/Dashboard/Course/CourseDetails/${result?.id}`}
                                  >
                                    <video
                                      // controls
                                      controlsList="nodownload"
                                      width="100%"
                                      height="200"
                                      autoPlay={false}
                                    >
                                      <source
                                        src={`${infoData?.baseApi}/${result?.uploadCourse}`}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </Link>
                                  <div className="gridarea__small__button">
                                    <div className="grid__badge">
                                      {result?.courseCategory}
                                    </div>
                                  </div>
                                </div>
                                <div className="gridarea__content">
                                  <div className="gridarea__list">
                                    <ul>
                                      <li>
                                        <i className="icofont-book-alt" />{" "}
                                        {
                                          groupedData?.[result?.id]?.items
                                            ?.length
                                        }
                                        Lesson
                                      </li>
                                      <li className="text-end">
                                        <i className="icofont-clock-time" />{" "}
                                        {
                                          groupedData?.[result?.id]
                                            ?.totalSessionTime
                                        }
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="gridarea__heading">
                                    <h3>
                                      <Link
                                        href={`/Dashboard/Course/CourseDetails/${result?.id}`}
                                      >
                                        {result?.courseTitle}
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className="gridarea__bottom">
                                    <div>
                                      {result?.coursePrice} <span>&#8377;</span>
                                      <del>
                                        / {result?.discountPrice}{" "}
                                        <span>&#8377;</span>
                                      </del>
                                    </div>
                                    <div className="gridarea__star">
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <span>(44)</span>
                                    </div>
                                  </div>
                                  <div className="gridarea__bottom">
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() =>
                                          router.push(
                                            `/Dashboard/Course/CreateCourse/${result?.id}`
                                          )
                                        }
                                      >
                                        Edit
                                      </button>
                                    </div>
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() =>
                                          router.push(
                                            `/Dashboard/Course/UploadSession`
                                          )
                                        }
                                      >
                                        Upload Session
                                      </button>
                                    </div>
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() => handleDelete(result?.id)}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="projects__two"
                      role="tabpanel"
                      aria-labelledby="projects__two"
                    >
                      <div className="row mb-3">
                        {courseData?.["data"]?.data
                          ?.filter(
                            (result) => result.courseStatus === "InActive"
                          )
                          ?.map((result) => (
                            <div
                              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3"
                              key={result?.id}
                            >
                              <div className="gridarea__wraper">
                                <div className="gridarea__img">
                                  <Link
                                    href={`/Dashboard/Course/CourseDetails/${result?.id}`}
                                  >
                                    <video
                                      // controls
                                      controlsList="nodownload"
                                      width="100%"
                                      height="200"
                                      autoPlay={false}
                                    >
                                      <source
                                        src={`${infoData?.baseApi}/${result?.uploadCourse}`}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </Link>
                                  <div className="gridarea__small__button">
                                    <div className="grid__badge">
                                      {result?.courseCategory}
                                    </div>
                                  </div>
                                </div>
                                <div className="gridarea__content">
                                  <div className="gridarea__list">
                                    <ul>
                                      <li>
                                        <i className="icofont-book-alt" />{" "}
                                        {
                                          groupedData?.[result?.id]?.items
                                            ?.length
                                        }
                                        Lesson
                                      </li>
                                      <li className="text-end">
                                        <i className="icofont-clock-time" />{" "}
                                        {
                                          groupedData?.[result?.id]
                                            ?.totalSessionTime
                                        }
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="gridarea__heading">
                                    <h3>
                                      <Link
                                        href={`/Dashboard/Course/CourseDetails/${result?.id}`}
                                      >
                                        {result?.courseTitle}
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className="gridarea__bottom">
                                    <div>
                                      {result?.coursePrice} <span>&#8377;</span>
                                      <del>
                                        / {result?.discountPrice}{" "}
                                        <span>&#8377;</span>
                                      </del>
                                    </div>
                                    <div className="gridarea__star">
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <i className="icofont-star" />
                                      <span>(44)</span>
                                    </div>
                                  </div>
                                  <div className="gridarea__bottom">
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() =>
                                          router.push(
                                            `/Dashboard/Course/CreateCourse/${result?.id}`
                                          )
                                        }
                                      >
                                        Edit
                                      </button>
                                    </div>
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() =>
                                          router.push(
                                            `/Dashboard/Course/UploadSession`
                                          )
                                        }
                                      >
                                        Upload Session
                                      </button>
                                    </div>
                                    <div className="create__course__bottom__button">
                                      <button
                                        className="py-2"
                                        onClick={() => handleDelete(result?.id)}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
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

export default CourseList;
