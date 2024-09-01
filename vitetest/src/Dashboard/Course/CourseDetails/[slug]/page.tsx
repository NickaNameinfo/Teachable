import * as React from "react";
import { infoData } from "../../../../configData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  useGetCouresIdQuery,
  useGetSessionQuery,
} from "../../../../Services/courses";

const AdminCourseDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data: courseData, refetch } = useGetCouresIdQuery(id);
  const { data: sessionData, refetch: sessionRefetch } = useGetSessionQuery();
  const [sessionList, setSessionsList] = React.useState(null);
  const [videoUrl, setVideoUrl] = React.useState(null);
  console.log(sessionList, videoUrl);
  const navigate = useNavigate();
  React.useEffect(() => {
    let tempDate = sessionData?.["data"]?.data?.filter(
      (item) => item.courseId === courseData?.data?.id
    );
    console.log(sessionList, "sessionsfdasd");
    setSessionsList(tempDate);
  }, [courseData]);
  return (
    <div>
      <div className="breadcrumbarea">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper">
                <div className="breadcrumb__title">
                  <h2 className="heading">Course-Details</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>Course-Details</li>
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
      <div className="blogarea__2 sp_top_100 sp_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="blog__details__content__wraper">
                <div className="course__details__heading">
                  <h3>{courseData?.data?.courseTitle}</h3>
                </div>
                {/* <div className="course__details__paragraph">
                  <p>{courseData?.data?.aboutCourse}</p>
                </div> */}
                <div className="course__details__tab__wrapper">
                  <div className="row">
                    <div className="col-xl-12">
                      <ul
                        className="nav  course__tap__wrap"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="single__tab__link active"
                            data-bs-toggle="tab"
                            data-bs-target="#projects__two"
                            type="button"
                          >
                            <i className="icofont-book-alt" />
                            Sessions
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="single__tab__link"
                            data-bs-toggle="tab"
                            data-bs-target="#projects__one"
                            type="button"
                          >
                            <i className="icofont-paper" />
                            Description
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-content tab__content__wrapper"
                    id="myTabContent"
                  >
                    <div
                      className="tab-pane fade  active show"
                      id="projects__two"
                      role="tabpanel"
                      aria-labelledby="projects__two"
                    >
                      <div
                        className="accordion content__cirriculum__wrap"
                        id="accordionExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Course content
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              {sessionList?.map((result, index) => (
                                <div
                                  className="accordion content__cirriculum__wrap"
                                  id="accordionExample"
                                >
                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button
                                        className="accordion-button justify-between"
                                        type="button"
                                      >
                                        <div className="d-flex">
                                          <span
                                            style={{
                                              background: "none",
                                              fontSize: "13px",
                                              borderRadius: "0px",
                                              display: "block",
                                              whiteSpace: "nowrap",
                                              overflow: "hidden",
                                              textOverflow: "ellipsis",
                                              width: "250px",
                                            }}
                                          >
                                            {result?.sessionTitle}
                                          </span>
                                          <span>{`Duration : ${result?.sessionTime}`}</span>
                                          <span>{`Lession : ${
                                            index + 1
                                          }`}</span>
                                          <span
                                            onClick={() =>
                                              navigate(
                                                `/Dashboard/Course/UploadSession/?id=${result?.id}`
                                              )
                                            }
                                          >
                                            <i className="icofont-edit cursor-pointer" />{" "}
                                            Edit
                                          </span>
                                        </div>
                                        <span
                                          className="question"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#TH${index}`}
                                          aria-expanded="true"
                                          aria-controls="collapseOne"
                                        >
                                          <i className="icofont-eye cursor-pointer" />{" "}
                                          Preview
                                        </span>
                                      </button>
                                    </h2>

                                    <div
                                      id={`TH${index}`}
                                      className="accordion-collapse collapse"
                                      aria-labelledby="headingOne"
                                      // data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body">
                                        <video
                                          controls
                                          controlsList="nodownload"
                                          width="100%"
                                          height="400"
                                        >
                                          <source
                                            src={`${infoData?.baseApi}/${result?.sessionUrl}`}
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
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
                    <div
                      className="tab-pane fade"
                      id="projects__one"
                      role="tabpanel"
                      aria-labelledby="projects__one"
                    >
                      <div className="experence__heading">
                        <h5> Experience Description</h5>
                      </div>
                      <div className="experence__description">
                        <p className="description__1">
                          {courseData?.data?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="course__details__sidebar">
                <div className="event__sidebar__wraper">
                  <div className="course__summery__lists">
                    <ul>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Start Date</span>
                          <span className="sb_content">
                            {courseData?.data?.startData}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Total Duration</span>
                          <span className="sb_content">08Hrs 32Min</span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Enrolled</span>
                          <span className="sb_content">100</span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Lectures</span>
                          <span className="sb_content">
                            {sessionList?.length}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Language</span>
                          <span className="sb_content">
                            {courseData?.data?.language}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Certificate</span>
                          <span className="sb_content">Yes</span>
                        </div>
                      </li>
                    </ul>
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

export default AdminCourseDetails;
