import "./NavBar.scss";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const NavBar = ({ logOut }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="nav-bar">
      <h2 className="nav-bar__heading">Strive</h2>
      {user && (
        <p className="nav-bar__logout" onClick={logOut}>
          Log Out
        </p>
      )}
    </div>
  );
};

export default NavBar;
