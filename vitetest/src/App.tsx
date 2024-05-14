import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import Login from "./Login/page";
import Courses from "./Courses/[slug]/page";
import CourseDetails from "./Courses/CourseDetails/[slug]/page";
import CheckOut from "./CheckOut/[slug]/page";
import Course from "./User/Course/page";
import User from "./User/page";
import Dashboard from "./Dashboard/page";
import Messages from "./Dashboard/Messages/page";
import CourseList from "./Dashboard/Course/CourseList/page";
import CreateCourse from "./Dashboard/Course/CreateCourse/[slug]/page";
import UploadSession from "./Dashboard/Course/UploadSession/page";
import AdminCourseDetails from "./Dashboard/Course/CourseDetails/[slug]/page";
import HomePage from "./HomePage/page";
import { useDispatch } from "react-redux";
import { login } from "./Login/loginSlice";
import React from "react";
function App() {
  const dispatch = useDispatch();
  const localData = localStorage.getItem("loginInfo");

  dispatch(
    login(localData ? JSON.parse(localStorage.getItem("loginInfo")) : null)
  );

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses/CourseDetails" element={<CourseDetails />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/User/Course" element={<Course />} />
        <Route path="/User" element={<User />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/Messages" element={<Messages />} />
        <Route path="/Dashboard/Course/CourseList" element={<CourseList />} />
        <Route
          path="/Dashboard/Course/CreateCourse"
          element={<CreateCourse />}
        />
        <Route
          path="/Dashboard/Course/UploadSession/:id?"
          element={<UploadSession />}
        />
        <Route
          path="/Dashboard/Course/AdminCourseDetails"
          element={<AdminCourseDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
