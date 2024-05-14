import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { infoData } from "../../../configData";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useAddSessionMutation,
  useGetCouresQuery,
  useGetSessionByIdQuery,
  useUpdateSessionMutation,
} from "../../../Services/courses";

const UploadSession = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id: any = searchParams.get("id");

  const [loding, setLoding] = React.useState(false);
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
    refetch,
  } = useGetCouresQuery();
  const {
    data: getSession,
    error: getSessionError,
    isLoading: getSessionLoading,
    refetch: getSessionRefetch,
  } = useGetSessionByIdQuery(id);
  const [addSession] = useAddSessionMutation();
  const [updateSession] = useUpdateSessionMutation();

  console.log(id, "id4353", getSession);

  const {
    handleSubmit: handleSubmit,
    control: control,
    watch,
    setValue,
    formState: { errors: errors },
  } = useForm();

  React.useEffect(() => {
    getSessionRefetch()
    if (id) {
      setValue("sessionTitle", getSession?.["data"]?.sessionTitle);
      setValue("sessionTime", getSession?.["data"]?.sessionTime);
      setValue("courseId", getSession?.["data"]?.courseId);
    }
  }, [id]);

  const onSubmit = async (data) => {
    console.log(data, "data");
    setLoding(true);
    const formData: any = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      if (id) {
        const updateResult = await updateSession({
          body: formData,
          id: id,
        });
        console.log(updateResult, "updateResult4532");
        if (!updateResult?.["data"]?.success) {
          alert("Session Title already exist");
        } else {
          setLoding(false);
          alert("Session uploaded successfully");
          navigate("/Dashboard/Course/CourseList");
        }
      } else {
        const result = await addSession(formData);
        if (!result?.["data"]?.success) {
          alert("Session Title already exist");
        } else {
          setLoding(false);
          alert("Session uploaded successfully");
          navigate("/Dashboard/Course/CourseList");
        }
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div className="col-xl-6 offset-md-3">
      <div className="loginarea__wraper">
        <div className="login__heading">
          <h5 className="login__title">Upload Session </h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xl-6">
              <div className="login__form">
                <label className="form__label">Course Name</label>
                <Controller
                  name="courseId"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...field}
                    >
                      <option>All</option>
                      {courseData?.["data"]?.data?.map((result) => (
                        <option value={result?.id} key={result?.id}>
                          {result?.courseTitle}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.courseId?.type === "required" && (
                  <p role="alert" className="error">
                    Field is required
                  </p>
                )}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="login__form">
                <label className="form__label">Session Title</label>
                <Controller
                  name="sessionTitle"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="common__login__input"
                      placeholder="Session Title"
                      {...field}
                    />
                  )}
                />
                {errors.sessionTitle?.type === "required" && (
                  <p role="alert" className="error">
                    Session title is required
                  </p>
                )}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="login__form">
                <label className="form__label">Session Time</label>
                <Controller
                  name="sessionTime"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="common__login__input"
                      placeholder="Session Time"
                      {...field}
                    />
                  )}
                />
                {errors.sessionTime?.type === "required" && (
                  <p role="alert" className="error">
                    Session Time is required
                  </p>
                )}
              </div>
            </div>
            {!id && (
              <div className="col-xl-6">
                <div className="login__form">
                  <label className="form__label">Seesion Video</label>
                  <Controller
                    name="sessionUrl"
                    control={control}
                    rules={{
                      required: "This field is required",
                    }}
                    render={({ field }) => (
                      <input
                        type={"file"}
                        onChange={(e) => {
                          console.log("Custom onChange:", e.target.files[0]);
                          field.onChange(e.target.files[0]);
                        }}
                      />
                    )}
                  />
                  {errors.sessionUrl && (
                    <p role="alert" className="error">
                      {String(errors.sessionUrl?.message)}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="login__button">
            <div className="create__course__bottom__button">
              <button type="submit" disabled={loding ? true : false}>
                {loding ? "Uploading..." : id ? "Update" : "Upload"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadSession;
