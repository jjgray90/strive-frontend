import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { setCurrentUser } from "../../api/userService";
import TextInput from "../../components/TextInput/TextInput";
import UserContext from "../../context/UserContext";
import Button from "../../components/Button/Button";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setCurrentUser(email, setUser);
    navigate("/dashboard");
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <TextInput labelText="Email" onChangeEvent={handleUpdateEmail} />
        <Button label="Log in" type="submit" />
      </form>
    </div>
  );
};

export default Login;
