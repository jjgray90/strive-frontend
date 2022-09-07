import "./NavBar.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const NavBar = ({ logOut }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <h2 className="nav-bar__heading" onClick={() => navigate("/dashboard")}>
        Strive
      </h2>

      {user && (
        <div className="nav-bar__links">
          <div className="links__upload">
            <Button label="Add Activity" onClick={() => navigate("/upload")} />
          </div>
          <p
            className="links__dashboard"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </p>
          <p className="links__logout" onClick={logOut}>
            Log Out
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
