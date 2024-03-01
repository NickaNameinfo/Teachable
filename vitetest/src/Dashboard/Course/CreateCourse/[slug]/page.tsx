import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  useAddCourseMutation,
  useGetCouresIdQuery,
  useUpdateCourseMutation,
} from "../../../../Services/courses";

const CreateCourse = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const navigate = useNavigate();
  const [addCourse] = useAddCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const { data: courseData, refetch } = useGetCouresIdQuery(id);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    if (courseData) {
      Object?.entries(courseData?.data).forEach(([fieldName, value]) => {
        setValue(fieldName, value);
      });
    }
    refetch();
  }, [courseData]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const result = await addCourse(formData);
      if (!result?.["data"]?.success) {
        alert("Course Title already exist");
      } else {
        navigate("/Dashboard/Course/CourseList");
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const onSubmitUpdate = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const result = await updateCourse({
        body: formData,
        id: id,
      });
      console.log(result, "result241234");
      if (!result?.["data"]?.success) {
        alert("Somethin want worng");
      } else {
        navigate("/Dashboard/Course/CourseList");
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div>
      <div className="create__course">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <form
                onSubmit={handleSubmit(
                  type !== "add" ? onSubmitUpdate : onSubmit
                )}
              >
                <div className="create__course__accordion__wraper">
                  <div className="accordion" id="accordionExample">
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
                          Course Info
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="become__instructor__form">
                            <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">Course Title</label>
                                    <Controller
                                      name="courseTitle"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="Course Title"
                                          {...field}
                                        />
                                      )}
                                    />
                                    {errors.courseTitle?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        First name is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">Course Category</label>
                                    <Controller
                                      name="courseCategory"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          {...field}
                                        >
                                          <option>All</option>
                                          <option value={"linux"}>Linux</option>
                                          <option value={"clound"}>
                                            Cloud Computing Courses
                                          </option>
                                          <option value={"programming"}>
                                            Programming & Frameworks
                                          </option>
                                          <option value={"controlSystem"}>
                                            Programming Control System
                                          </option>
                                          <option value={"devops"}>
                                            Devops
                                          </option>
                                          <option value={"configuration"}>
                                            Configuration Tool
                                          </option>
                                          <option value={"cloudNative"}>
                                            CloudNative-Observability Tools
                                          </option>
                                          <option value={"container"}>
                                            Container technology
                                          </option>
                                          <option value={"visualization"}>
                                            BI & Visualization
                                          </option>
                                          <option value={"artificial"}>
                                            Artificial Intelligence
                                          </option>
                                          <option value={"dataScience"}>
                                            Data Science
                                          </option>
                                        </select>
                                      )}
                                    />
                                    {errors.courseCategory?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__wraper mt-3">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">Course Price</label>
                                    <Controller
                                      name="coursePrice"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="Course Price"
                                          {...field}
                                        />
                                      )}
                                    />
                                    {errors.coursePrice?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">Discounted Price</label>
                                    <Controller
                                      name="discountPrice"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="Course Discount"
                                          {...field}
                                        />
                                      )}
                                    />
                                    {errors.discountPrice?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                  <div className="dashboard__select__heading">
                                    <span>Courses</span>
                                  </div>
                                  <div className="dashboard__selector">
                                    <Controller
                                      name="courseName"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          {...field}
                                        >
                                          <option>All</option>
                                          <option value={1}>Web Design</option>
                                          <option value={2}>Graphic</option>
                                          <option value={3}>English</option>
                                          <option value={4}>
                                            Spoken English
                                          </option>
                                          <option value={5}>
                                            Art Painting
                                          </option>
                                          <option value={6}>
                                            App Development
                                          </option>
                                          <option value={7}>
                                            Web Application
                                          </option>
                                          <option value={7}>
                                            Php Development
                                          </option>
                                        </select>
                                      )}
                                    />
                                    {errors.courseName?.type === "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                  <div className="dashboard__select__heading">
                                    <span>SHORT BY OFFER</span>
                                  </div>
                                  <div className="dashboard__selector">
                                    <Controller
                                      name="courseOffer"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          {...field}
                                        >
                                          <option>Free</option>
                                          <option value={1}>paid</option>
                                          <option value={2}>premimum</option>
                                        </select>
                                      )}
                                    />
                                    {errors.courseName?.type === "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                  <div className="dashboard__select__heading">
                                    <span>Course Status</span>
                                  </div>
                                  <div className="dashboard__selector">
                                    <Controller
                                      name="courseStatus"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          {...field}
                                        >
                                          <option value={"Active"}>
                                            Active
                                          </option>
                                          <option value={"InActive"}>
                                            InActive
                                          </option>
                                        </select>
                                      )}
                                    />
                                    {errors.courseStatus?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">About Course</label>
                                    <Controller
                                      name="aboutCourse"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <textarea
                                          cols={30}
                                          rows={10}
                                          {...field}
                                        />
                                      )}
                                    />
                                    {errors.aboutCourse?.type ===
                                      "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div className="dashboard__form__button create__course__margin">
                                  <label htmlFor="#">Upload Course</label>
                                  <br />
                                  <Controller
                                    name="uploadCourse"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                      <input
                                        type={"file"}
                                        onChange={(e) => {
                                          // Your custom onChange logic here
                                          // For example, you can access the selected file using e.target.files[0]
                                          console.log(
                                            "Custom onChange:",
                                            e.target.files[0]
                                          );
                                          field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                                        }}
                                      />
                                    )}
                                  />
                                  {errors.uploadCourse?.type === "required" && (
                                    <p role="alert" className="error">
                                      Field is required
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Course Intro Video
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="become__instructor__form">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="dashboard__form__wraper">
                                  <div className="dashboard__form__input">
                                    <label htmlFor="#">
                                      Add Your Video URL
                                    </label>
                                    <Controller
                                      name="introVideo"
                                      control={control}
                                      rules={{ required: true }}
                                      render={({ field }) => (
                                        <input
                                          type="text"
                                          placeholder="Add your Video URL here"
                                          {...field}
                                        />
                                      )}
                                    />
                                    {errors.introVideo?.type === "required" && (
                                      <p role="alert" className="error">
                                        Field is required
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <small>
                                Example:{" "}
                                <a
                                  href="https://www.youtube.com/watch?v=rTdEO0P0HzM"
                                  target="_blank"
                                >
                                  https://www.youtube.com/watch?v=rTdEO0P0HzM
                                </a>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Additional Information
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="dashboard__form__wraper">
                                <div className="dashboard__form__input">
                                  <label htmlFor="#">Start Date</label>
                                  <Controller
                                    name="startData"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                      <input
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                        {...field}
                                      />
                                    )}
                                  />
                                  {errors.startData?.type === "required" && (
                                    <p role="alert" className="error">
                                      Field is required
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="dashboard__form__wraper">
                                <div className="dashboard__form__input">
                                  <label htmlFor="#">Language</label>
                                  <Controller
                                    name="language"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                      <input
                                        type="text"
                                        placeholder="Language"
                                        {...field}
                                      />
                                    )}
                                  />
                                  {errors.language?.type === "required" && (
                                    <p role="alert" className="error">
                                      Field is required
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="dashboard__form__wraper">
                                <div className="dashboard__form__input">
                                  <label htmlFor="#">Requirements</label>
                                  <Controller
                                    name="courseRequirements"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                      <textarea
                                        className="create__course__textarea"
                                        cols={30}
                                        rows={10}
                                        {...field}
                                        defaultValue={
                                          "Add your course benefits here."
                                        }
                                      />
                                    )}
                                  />
                                  {errors.courseRequirements?.type ===
                                    "required" && (
                                    <p role="alert" className="error">
                                      Field is required
                                    </p>
                                  )}

                                  <small className="create__course__small">
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
                                      className="feather feather-info"
                                    >
                                      <circle cx={12} cy={12} r={10} />
                                      <line x1={12} y1={16} x2={12} y2={12} />
                                      <line x1={12} y1={8} x2="12.01" y2={8} />
                                    </svg>{" "}
                                    Enter for per line.
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="dashboard__form__wraper">
                                <div className="dashboard__form__input">
                                  <label htmlFor="#">Description</label>
                                  <Controller
                                    name="description"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                      <textarea
                                        cols={30}
                                        rows={10}
                                        {...field}
                                      />
                                    )}
                                  />
                                  {errors.description?.type === "required" && (
                                    <p role="alert" className="error">
                                      Field is required
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div className="create__course__bottom__button">
                      <Link to="/Dashboard/Course/CourseList">Back</Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-6 col-12">
                    <div className="create__course__bottom__button">
                      <button type="submit" className="">
                        {type !== "add" ? "Update Course" : "Create Course"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="create__course__wraper">
                <div className="create__course__title">
                  <h4>Course Upload Tips</h4>
                </div>
                <div className="create__course__list">
                  <ul>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Set the Course Price option make it free.
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Standard size for the course thumbnail.
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Video section controls the course overview video.
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Course Builder is where you create course.
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Add Topics in the Course Builder section to create
                      lessons, .
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Prerequisites refers to the fundamental courses .
                    </li>
                    <li>
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
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Information from the Additional Data section.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
