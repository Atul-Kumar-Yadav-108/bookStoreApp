import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Courses from "../pages/Courses";

const CourseWrapper = () => {
  const [ authUser ] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/"); // 🔥 pehle home route
      setTimeout(() => {
        document.getElementById("my_modal_1")?.showModal(); // 🔥 phir modal
      }, 500);
    }
  }, [authUser, navigate]);

  if (!authUser) return null;

  return <Courses />;
};

export default CourseWrapper;
