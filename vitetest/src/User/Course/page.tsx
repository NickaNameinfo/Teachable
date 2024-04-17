import * as React from "react";
import { infoData } from "../../configData";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  useGetCheckOutCouresQuery,
  useGetCouresQuery,
  useGetSessionQuery,
  useGetWatchlistdQuery,
} from "../../Services/courses";
import { Link } from "react-router-dom";

const Course = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [enrolledCourse, setEnrolledCourse] = React.useState(null);
  const [groupedData, setGroupedDate] = React.useState(null);
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
    refetch,
  } = useGetCouresQuery();
  const {
    data: watchlisted,
    error: watchlistedError,
    refetch: watchlistedRefetch,
  } = useGetWatchlistdQuery();

  const {
    data: checkOutData,
    error: checkOutError,
    refetch: checkOutRefetch,
  } = useGetCheckOutCouresQuery();

  const {
    data: sessionData,
    error: sessionError,
    isLoading: sessionLoading,
    refetch: sessionRefetch,
  } = useGetSessionQuery();

  const [completionData, setCompletionData] = React.useState([]);

  React.useEffect(() => {
    refetch();
    sessionRefetch();
    checkOutRefetch();
  }, []);

  React.useEffect(() => {
    // Calculate completion percentage for each course in data1
    const calculateCompletionPercentage = (courseId) => {
      let courseData1 = watchlisted?.["data"]?.data?.filter(
        (item) => item?.courseId === courseId
      );
      let totalSessions = groupedData?.[courseId]?.items?.length;
      let completedSessions = courseData1?.filter(
        (item) => item?.sessionStatus === "Completed"
      ).length;
      let completionPercentage = (completedSessions / totalSessions) * 100;

      return completionPercentage.toFixed(); // Round to two decimal places
    };

    // Create an array with completion data for each course
    const completionDataArray = watchlisted?.["data"]?.data?.map((item) => {
      let courseId = item?.courseId;
      let completionPercentage = calculateCompletionPercentage(courseId);
      return {
        courseId,
        completionPercentage,
      };
    });
    console.log(completionDataArray, "completionDataArray23");
    // Set the completion data in the component state
    setCompletionData(completionDataArray);
  }, [groupedData, watchlisted]);

  React.useEffect(() => {
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

  console.log(sessionData?.["data"]?.data, "sessionData12312", groupedData);

  console.log(watchlisted?.["data"]?.data, "watchlisted");

  React.useEffect(() => {
    let filteredData = courseData?.["data"]?.data?.filter((item2) => {
      return checkOutData?.["data"]?.data.some(
        (item1) =>
          item1.courseId === item2.id &&
          item2.courseStatus === "Active" &&
          item1.customerId === userInfo?.id
      );
    });
    setEnrolledCourse(filteredData);
  }, [courseData, checkOutData]);

  return (
    <div>
      <div className="dashboard">
        <div className="container-fluid full__width__padding">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="dashboard__content__wraper">
                <div className="dashboard__section__title">
                  <h4>Your Courses</h4>
                </div>
                <div className="row">
                  <div className="row">
                    {enrolledCourse?.map((result) => (
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 col-12"
                        key={result.id}
                      >
                        <div className="gridarea__wraper">
                          <div className="gridarea__img">
                            {result?.uploadCourse && (
                              <Link
                                to={`/Courses/CourseDetails/?id=${result?.id}`}
                              >
                                <video
                                  // controls
                                  controlsList="nodownload"
                                  width="100%"
                                  height="200"
                                  autoPlay={false}
                                  playsInline={true}
                                >
                                  <source
                                    src={`${result?.uploadCourse}`}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </Link>
                            )}
                            <div className="gridarea__small__button">
                              <div className="grid__badge">
                                {result?.courseCategory}
                              </div>
                            </div>
                            {/* <div className="gridarea__small__icon">
                                  <Link to="#">
                                    <i className="icofont-heart-alt" />
                                  </Link>
                                </div> */}
                          </div>
                          <div className="gridarea__content">
                            <div className="gridarea__list">
                              <ul>
                                <li>
                                  <i className="icofont-book-alt" />{" "}
                                  {groupedData?.[result?.id]?.items?.length}
                                  Lesson
                                </li>
                                <li>
                                  <i className="icofont-clock-time" /> 1 hr
                                  {groupedData?.[result?.id]?.totalSessionTime}
                                </li>
                              </ul>
                            </div>
                            <div className="gridarea__heading">
                              <h3>
                                <Link
                                  to={`/Courses/CourseDetails/?id=${result?.id}`}
                                >
                                  {result?.courseTitle}{" "}
                                </Link>
                              </h3>
                            </div>
                            <div className="gridarea__bottom">
                              <Link to="#">
                                <div className="gridarea__small__img">
                                  {/* <img
                                        loading="lazy"
                                        src=".././src/assets/img/grid/grid_small_1.jpg"
                                        alt="grid"
                                      /> */}
                                  <div className="gridarea__small__content">
                                    {/* <h6>Micle Jhon</h6> */}
                                  </div>
                                </div>
                              </Link>
                              <div className="gridarea__star">
                                <i className="icofont-star" />
                                <i className="icofont-star" />
                                <i className="icofont-star" />
                                <i className="icofont-star" />
                                <i className="icofont-star" />
                                <span>(44)</span>
                              </div>
                            </div>
                          </div>
                          <div className="grid__course__status populerarea__button">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={80}
                                style={{
                                  width: `${
                                    completionData?.find(
                                      (item) => item.courseId === result?.id
                                    )?.completionPercentage
                                  }%`,
                                }}
                              >
                                {
                                  completionData?.find(
                                    (item) => item.courseId === result?.id
                                  )?.completionPercentage
                                }
                                % Complete
                              </div>
                            </div>
                            {completionData?.find(
                              (item) => item.courseId === result?.id
                            )?.completionPercentage === "100" ? (
                              <Link className="default__button" to={`#`}>
                                Download Certification
                              </Link>
                            ) : (
                              <Link
                                className="default__button"
                                to={`/Courses/CourseDetails/?id=${result?.id}`}
                              >
                                Complete Course
                              </Link>
                            )}
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
  );
};

export default Course;
