import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { setCurrentUser } from "../../api/userService";
import TextInput from "../../components/TextInput/TextInput";
import UserContext from "../../context/UserContext";
import Button from "../../components/Button/Button";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setCurrentUser(email, setUser);

    navigate("/dashboard");
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">Strive</h2>
        <form className="login__form" onSubmit={handleLogin}>
          <TextInput labelText="Email" onChangeEvent={handleUpdateEmail} />
          <Button label="Log in" type="submit" />
        </form>
        <p className="login__register" onClick={() => navigate("/register")}>
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
