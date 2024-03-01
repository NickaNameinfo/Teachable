import React from "react";
import { infoData } from "../../configData";
import axios from "axios";
import { useGetCouresQuery, useGetSessionQuery } from "../../Services/courses";
import { Link, useSearchParams } from "react-router-dom";

const Courses = () => {
  const [groupedData, setGroupedDate] = React.useState(null);
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
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  console.log(courseData, "asdfs098sd0", title);

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

  console.log(sessionData?.["data"]?.data, "sessionData12312", groupedData);

  return (
    <div>
      <div className="gridarea">
        <div className="container">
          <div className="row">
            <div className="section__title text-center">
              <div className="section__title__button">
                <div className="default__small__button">
                  Business Course List
                </div>
              </div>
            </div>
          </div>
          <div className="row grid">
            {courseData?.["data"]?.data
              ?.filter(
                (result) =>
                  result.courseStatus === "Active" &&
                  result?.courseCategory === title
              )
              ?.map((result) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3"
                  key={result?.id}
                >
                  <div className="gridarea__wraper">
                    <div className="gridarea__img">
                      <Link to={`/Courses/CourseDetails/?id=${result?.id}`}>
                        {result?.uploadCourse && (
                          <video
                            // controls
                            controlsList="nodownload"
                            width="100%"
                            height="200"
                            autoPlay={false}
                            playsInline={true}
                          >
                            <source
                              src={`${infoData?.baseApi}/${result?.uploadCourse}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
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
                            {groupedData?.[result?.id]?.items?.length} Lesson
                          </li>
                          <li className="text-end">
                            <i className="icofont-clock-time" />{" "}
                            {groupedData?.[result?.id]?.totalSessionTime}
                          </li>
                        </ul>
                      </div>
                      <div className="gridarea__heading">
                        <h3>
                          <Link to={`/Courses/CourseDetails/?id=${result?.id}`}>
                            {result?.courseTitle}
                          </Link>
                        </h3>
                      </div>
                      <div className="gridarea__bottom">
                        <div>
                          {result?.coursePrice} <span>&#8377;</span>
                          <del>
                            / {result?.discountPrice} <span>&#8377;</span>
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
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
