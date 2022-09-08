import burger from "../../assets/burger.svg";
import "./NavBar.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const NavBar = ({ logOut }) => {
  const { user } = useContext(UserContext);
  const [mobileNav, setMobileNav] = useState("");
  const navigate = useNavigate();

  const toggleNav = () => {
    if (mobileNav === "") {
      setMobileNav("nav-bar__links--mobile");
    } else setMobileNav("");
  };

  return (
    <div className="nav-bar">
      <h2 className="nav-bar__heading" onClick={() => navigate("/dashboard")}>
        Strive
      </h2>

      {user && (
        <div className="nav-bar__navigation">
          <div className="navigation__upload">
            <Button label="Add Activity" onClick={() => navigate("/upload")} />
          </div>
          <div className={`nav-bar__links ${mobileNav}`}>
            <p
              className="links__dashboard"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </p>
            <p className="links__profile" onClick={() => navigate("/profile")}>
              Profile
            </p>
            <p className="links__logout" onClick={logOut}>
              Log Out
            </p>
          </div>
          <img
            className="links__burger"
            src={burger}
            alt="menu"
            onClick={() => toggleNav()}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
