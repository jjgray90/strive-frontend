import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { registerUser, setCurrentUser } from "../../api/userService";
import TextInput from "../../components/TextInput/TextInput";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import UserContext from "../../context/UserContext";
import "./Registration.scss";

const Registration = () => {
  const [firstName, setUserFirstName] = useState();
  const [lastName, setUserLastName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [dob, setDob] = useState();
  const [image, setImage] = useState();
  const [km, setKm] = useState(true);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const result = await registerUser({
      firstName,
      lastName,
      email,
      location,
      km,
      dob,
      image,
    });

    if (result.isSuccess) {
      setCurrentUser(email, setUser);
      navigate("/dashboard");
    }
  };

  const handleUpdateFirstName = (event) => {
    setUserFirstName(event.target.value);
  };

  const handleUpdateLastName = (event) => {
    setUserLastName(event.target.value);
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleUpdateUOM = (event) => {
    const boolean = event.target.value === "true";
    setKm(boolean);
  };

  const handleUpdateDOB = (event) => {
    setDob();
  };

  const handleUpdateImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className="registration">
      <div className="registration__container">
        <h2 className="registration__heading">Strive</h2>
        <form
          className="registration__form"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleRegister}
        >
          <TextInput
            labelText="First Name"
            onChangeEvent={handleUpdateFirstName}
          />
          <TextInput
            labelText="Last Name"
            onChangeEvent={handleUpdateLastName}
          />
          <TextInput labelText="Email" onChangeEvent={handleUpdateEmail} />
          <TextInput
            labelText="Location"
            onChangeEvent={handleUpdateLocation}
          />
          {/* <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={handleUpdateImage}
          /> */}
          <div className="form__radio-container">
            <h3 className="radio-container__heading">Unit of Measurement</h3>
            <RadioButton
              labelText="Kilometres"
              value={true}
              inputName="unit-of-measurement"
              onInputEvent={handleUpdateUOM}
              startChecked={true}
            />
            <RadioButton
              labelText="Miles"
              value={false}
              inputName="unit-of-measurement"
              onInputEvent={handleUpdateUOM}
            />
          </div>
          <Button label="Create Account" type="submit" />
        </form>
        <p className="registration__login" onClick={() => navigate("/login")}>
          Log in
        </p>
      </div>
    </div>
  );
};

export default Registration;
