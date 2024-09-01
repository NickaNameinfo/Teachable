import * as React from "react";
import { infoData } from "../../../configData";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { RootState } from "../../../Store";
import {
  useAddClarificationMutation,
  useAddFeedbackMutation,
  useAddWatchListMutation,
  useGetCheckOutCouresIdQuery,
  useGetCouresIdQuery,
  useGetFeebackCouresIdQuery,
  useGetSessionsIdQuery,
  useGetWatchlistCouresIdQuery,
  useUpdateWatchListMutation,
} from "../../../Services/courses";

const CourseDetails = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data: courseData, refetch } = useGetCouresIdQuery(id);
  console.log(courseData, "courseData345234");
  const { data: courseWatchlistData, refetch: courseWatchlistRefetch } =
    useGetWatchlistCouresIdQuery(id);
  const [addWatchlist] = useAddWatchListMutation();
  const [addFeeback] = useAddFeedbackMutation();
  const [addClarification] = useAddClarificationMutation();
  const [updateWatchlist] = useUpdateWatchListMutation();
  const { data: sessionList, refetch: refetchSessionList } =
    useGetSessionsIdQuery(id);
  const { data: feebacklist, refetch: refetchFeedbackList } =
    useGetFeebackCouresIdQuery(id);
  const { data: checkOutItem, refetch: refetchCheckOutItem } =
    useGetCheckOutCouresIdQuery({
      courseId: id,
      customerId: userInfo?.id,
    });
  console.log(feebacklist, "asdfsadfasdfeebacklist", id);
  const {
    handleSubmit: handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    handleSubmit: handleSubmitSupport,
    control: supoortControl,
    formState: { errors: supportError },
  } = useForm();

  React.useEffect(() => {
    refetchSessionList();
    refetchCheckOutItem();
    refetch();
    courseWatchlistRefetch();
    refetchFeedbackList();
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
        sessionId: null,
        sessionNumber: null,
        sessionTitle: null,
        sessionStatus: null,
      };
      let result = await addFeeback(tempData);
      if (result) {
        location.reload();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  const onSubmitSupport = async (formData) => {
    try {
      let tempData = {
        ...formData,
        courseName: courseData?.data?.courseTitle,
        subTotal: courseData?.data?.coursePrice,
        paymentType: null,
        paymentStatus: null,
        courseId: courseData?.data?.id,
        userName: userInfo?.userName,
        customerId: userInfo?.id,
        sessionId: null,
        sessionNumber: null,
        sessionTitle: null,
        sessionStatus: null,
      };
      let result = await addClarification(tempData);
      if (result) {
        location.reload();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  const VideoComponent = ({ result, infoData, index }) => {
    console.log(courseWatchlistData, "result23423");
    let condtionCheck = courseWatchlistData?.data.filter(
      async (item) => Number(item.sessionNumber) === Number(index)
    );
    console.log(condtionCheck, "condtionCheck", condtionCheck?.length);
    React.useEffect(() => {
      const vid = document.getElementById(result?.id);
      if (vid) {
        vid.onended = async function () {
          try {
            let tempData = {
              courseId: result?.courseId,
              sessionId: result?.id,
              customerId: userInfo?.id,
              sessionNumber: index,
              sessionTitle: result?.sessionTitle,
              sessionStatus: "Completed",
            };
            condtionCheck.length !== 0
              ? updateWatchlist({
                  body: tempData,
                  id: condtionCheck?.[0].id,
                })
              : await addWatchlist(tempData);
          } catch (error) {
            console.error("Error making POST request:", error);
          }
          alert("The video has ended");
        };
      }
    }, [result?.id]);

    return (
      <video
        controls
        controlsList="nodownload"
        width="100%"
        height="400"
        id={result?.id}
      >
        <source
          src={`${infoData?.baseApi}/${result?.sessionUrl}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  };

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
                      <Link to="/">Home</Link>
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
              <div className="blogarae__img__2 course__details__img__2">
                {courseData?.data?.uploadCourse && (
                  <video
                    controls
                    controlsList="nodownload"
                    width="100%"
                    height="400"
                    autoPlay={true}
                  >
                    <source
                      src={`${infoData?.baseApi}/${courseData?.data?.uploadCourse}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="blog__details__content__wraper">
                <div className="course__button__wraper">
                  <div className="course__button">
                    <Link className="course__2" to="#">
                      {courseData?.data?.courseCategory}
                    </Link>
                  </div>
                </div>
                <div className="course__details__heading">
                  <h3>{courseData?.data?.courseTitle}</h3>
                </div>
                <div className="course__details__price">
                  <ul>
                    <li>
                      <div className="course__price">
                        {courseData?.data?.coursePrice}{" "}
                        <del>/ {courseData?.data?.discountPrice}</del>
                      </div>
                    </li>
                    <li>
                      <div className="course__details__date">
                        <i className="icofont-book-alt" />{" "}
                        {sessionList?.data?.length} Lesson
                      </div>
                    </li>
                    <li>
                      <div className="course__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(44)</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="course__details__paragraph">
                  <p>{courseData?.data?.aboutCourse}</p>
                </div>
                <h4 className="sidebar__title">Course Details</h4>
                <div className="course__details__wraper">
                  <ul>{courseData?.data?.aboutCourse}</ul>
                  <ul>
                    <li>
                      Course level : <span>Intermediate</span>
                    </li>
                    <li>
                      Language : <span>{courseData?.data?.language}</span>
                    </li>
                    <li>
                      Price Discount :{" "}
                      <del>{courseData?.data?.discountPrice}</del>
                    </li>
                    <li>
                      Regular Price :{" "}
                      <span>{courseData?.data?.coursePrice}</span>
                    </li>
                    <li>
                      Course Status :{" "}
                      <span>{courseData?.data?.courseStatus}</span>
                    </li>
                  </ul>
                </div>
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
                            Curriculum
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
                        <li className="nav-item" role="presentation">
                          <button
                            className="single__tab__link"
                            data-bs-toggle="tab"
                            data-bs-target="#projects__three"
                            type="button"
                          >
                            <i className="icofont-star" />
                            Reviews
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
                              {sessionList?.data?.map((result, index) => (
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
                                        <div>
                                          {result?.sessionTitle}{" "}
                                          <span>{`Duration : ${result?.sessionTime}`}</span>
                                          <span>{`Lession : ${
                                            index + 1
                                          }`}</span>
                                        </div>
                                        {checkOutItem?.data?.length > 0 ? (
                                          <>
                                            {courseWatchlistData?.data.some(
                                              (item) =>
                                                item.sessionId === result?.id
                                            ) && (
                                              <span
                                                className="question"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#TH${index}`}
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                style={{
                                                  background: "green",
                                                  right: "38%",
                                                  color: "white",
                                                }}
                                              >
                                                Completed
                                              </span>
                                            )}
                                            <span
                                              className="question"
                                              data-bs-toggle="collapse"
                                              data-bs-target={`#TH${index}`}
                                              aria-expanded="true"
                                              aria-controls="collapseOne"
                                            >
                                              <i className="icofont-eye cursor-pointer" />{" "}
                                              Start
                                            </span>
                                          </>
                                        ) : (
                                          <span className="question">
                                            <i className="icofont-eye-blocked cursor-pointer" />{" "}
                                            Preview
                                          </span>
                                        )}
                                      </button>
                                    </h2>

                                    <div
                                      id={`TH${index}`}
                                      className="accordion-collapse collapse"
                                      aria-labelledby="headingOne"
                                      // data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body">
                                        <VideoComponent
                                          result={result}
                                          infoData={infoData}
                                          index={index + 1}
                                        />
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
                    <div
                      className="tab-pane fade"
                      id="projects__three"
                      role="tabpanel"
                      aria-labelledby="projects__three"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="review__box">
                            <div className="review__number">5.0</div>
                            <div className="review__icon">
                              <i className="icofont-star" />
                              <i className="icofont-star" />
                              <i className="icofont-star" />
                              <i className="icofont-star" />
                              <i className="icofont-star" />
                            </div>
                            <span>(17 Reviews)</span>
                          </div>
                        </div>
                        <div className="col-lg-8 col--30">
                          <div className="review__wrapper">
                            <div className="single__progress__bar">
                              <div className="rating__text">
                                5 <i className="icofont-star" />
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              <span className="rating-value">10</span>
                            </div>
                            <div className="single__progress__bar">
                              <div className="rating__text">
                                4 <i className="icofont-star" />
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              <span className="rating-value">5</span>
                            </div>
                            <div className="single__progress__bar">
                              <div className="rating__text">
                                3 <i className="icofont-star" />
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              <span className="rating-value">3</span>
                            </div>
                            <div className="single__progress__bar">
                              <div className="rating__text">
                                2 <i className="icofont-star" />
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "30%" }}
                                  aria-valuenow={30}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              <span className="rating-value">2</span>
                            </div>
                            <div className="single__progress__bar">
                              <div className="rating__text">
                                1 <i className="icofont-star" />
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "10%" }}
                                  aria-valuenow={10}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              <span className="rating-value">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="property__facts__feature property__facts__feature__2 ">
                        <h4>Customer Reviews</h4>

                        <ul className="property__comment">
                          {feebacklist?.data.map((result, index) => (
                            <li className="property__comment__list" key={index}>
                              <div className="property__comment__img">
                                <img
                                  loading="lazy"
                                  src="/./src/assets/img/teacher/teacher__2.png"
                                  alt="Image"
                                />
                              </div>
                              <div className="property__comment__comment">
                                <h6>
                                  <Link to="#">{result?.name}</Link>
                                </h6>
                                <div className="property__sidebar__icon">
                                  <ul>
                                    <li>
                                      <i className="icofont-star" />
                                    </li>
                                    <li>
                                      <i className="icofont-star" />
                                    </li>
                                    <li>
                                      <i className="icofont-star" />
                                    </li>
                                    <li>
                                      <i className="icofont-star" />
                                    </li>
                                    <li>
                                      <i className="icofont-star" />
                                    </li>
                                  </ul>
                                </div>
                                <p>{result?.commits}</p>
                                <span className="property__comment__reply__btn">
                                  {result?.createdAt}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="add__a__review__wrapper"
                      >
                        <h4>Add a Review</h4>
                        <div className="add__a__review">
                          <h6>Your Ratings:</h6>
                          <div className="property__sidebar__icon">
                            <ul>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                              <li>
                                <i className="icofont-star" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="add__a__review__input">
                          <Controller
                            name="commits"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <textarea
                                placeholder="Type your comments...."
                                defaultValue={""}
                                {...field}
                              />
                            )}
                          />
                          {errors.commits?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                        <div className="add__a__review__input">
                          <Controller
                            name="name"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input
                                type="text"
                                placeholder="Type your name...."
                                {...field}
                              />
                            )}
                          />
                          {errors.name?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                        <div className="add__a__review__input">
                          <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input
                                type="email"
                                placeholder="Type your email...."
                                {...field}
                              />
                            )}
                          />
                          {errors.email?.type === "required" && (
                            <p role="alert" className="error">
                              Field is required
                            </p>
                          )}
                        </div>
                        <div className="add__a__review__button">
                          <button className="default__button" type="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="course__details__sidebar">
                <div className="event__sidebar__wraper">
                  <div className="blogarae__img__2 course__details__img__2">
                    {courseData?.data?.uploadCourse && (
                      <video
                        // controls
                        controlsList="nodownload"
                        width="100%"
                        height="200"
                        autoPlay={false}
                        playsInline={true}
                      >
                        <source
                          src={`${infoData?.baseApi}/${courseData?.data?.uploadCourse}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <div className="event__price__wraper">
                    <div className="event__price">
                      {courseData?.data?.coursePrice}{" "}
                      <del>/ {courseData?.data?.discountPrice}</del>
                    </div>
                    <div className="event__Price__button">
                      <Link to="#">68% OFF</Link>
                    </div>
                  </div>
                  {checkOutItem?.data?.length === 0 && (
                    <div className="course__summery__button">
                      <Link
                        className="default__button default__button--2"
                        to={`/CheckOut/?id=${id}`}
                      >
                        Buy Now
                      </Link>
                      <span>
                        <i className="icofont-ui-rotation" />
                        45-Days Money-Back Guarantee
                      </span>
                    </div>
                  )}

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
                          <span className="sb_label">Lectures</span>
                          <span className="sb_content">30</span>
                        </div>
                      </li>
                      <li>
                        <div className="course__summery__item">
                          <span className="sb_label">Skill Level</span>
                          <span className="sb_content">Basic</span>
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
                  <div className="course__summery__button">
                    <p>More inquery about course.</p>
                    <Link
                      className="default__button default__button--3"
                      to="tel:+4733378901"
                    >
                      <i className="icofont-phone" /> +47 333 78 901
                    </Link>
                  </div>
                </div>
                <div className="blogsidebar__content__wraper__2">
                  <h4 className="sidebar__title">Follow Us</h4>
                  <div className="follow__icon">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-youtube-play" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blogsidebar__content__wraper__2">
                  <h4 className="sidebar__title">Get support</h4>
                  <div className="get__touch__input">
                    <form onSubmit={handleSubmitSupport(onSubmitSupport)}>
                      <Controller
                        name="name"
                        control={supoortControl}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter name*"
                            {...field}
                          />
                        )}
                      />
                      {errors.name?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}
                      <Controller
                        name="email"
                        control={supoortControl}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Enter your mail*"
                            {...field}
                          />
                        )}
                      />
                      {errors.email?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}

                      <Controller
                        name="commits"
                        control={supoortControl}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <input
                            type="text"
                            placeholder="Massage*"
                            {...field}
                          />
                        )}
                      />
                      {errors.commits?.type === "required" && (
                        <p role="alert" className="error">
                          Field is required
                        </p>
                      )}

                      <button className="default__button" type="submit">
                        Submit
                      </button>
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

export default CourseDetails;
