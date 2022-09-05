import "./NavBar.scss";

const NavBar = ({ logOut }) => {
  return (
    <div className="nav-bar">
      <h2 className="nav-bar__heading">STRIVE</h2>
      <p onClick={logOut}>Log Out</p>
    </div>
  );
};

export default NavBar;
