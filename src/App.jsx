import "./App.scss";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { setCurrentUser } from "./api/userService";
import UserContext from "./context/UserContext";

const App = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("userEmail");

  useEffect(() => {
    if (loggedInUser) {
      navigate("/dashboard");
      setCurrentUser(loggedInUser, setUser);
    } else {
      navigate("/login");
    }
  }, [setUser, navigate, loggedInUser]);

  return (
    <div className="app">
      <div className="app__navbar">
        <NavBar />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <div className="app__footer">
        <NavBar />
      </div>
    </div>
  );
};

export default App;
