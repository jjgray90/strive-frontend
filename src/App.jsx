import "./App.scss";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import ActivityUpload from "./pages/ActivityUpload/ActivityUpload";
import Dashboard from "./pages/Dashboard/Dashboard";
import { setCurrentUser } from "./api/userService";
import UserContext from "./context/UserContext";

const App = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("userEmail");

  const logUserOut = () => {
    localStorage.removeItem("userEmail");
    setUser(undefined);
    navigate("/login");
  };

  useEffect(() => {
    if (loggedInUser) {
      setCurrentUser(loggedInUser, setUser);
      //   navigate("/dashboard");
      // } else {
      //   navigate("/login");
    }
  }, [setUser, navigate, loggedInUser]);

  return (
    <div className="app">
      <div className="app__background"></div>
      <div className="app__background-color"></div>

      <div className="app__navbar">
        <NavBar logOut={logUserOut} />
      </div>
      <div className="app__body">
        <div className="body-boi"></div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/upload" element={<ActivityUpload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
