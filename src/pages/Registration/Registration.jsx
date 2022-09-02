import { useState } from "react";
import { registerUser } from "../../api/userService";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import "./Registration.scss";

const Registration = () => {
  const [firstName, setUserFirstName] = useState();
  const [lastName, setUserLastName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [dob, setDob] = useState();
  const [image, setImage] = useState();

  const handleRegister = async (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      location,
    });

    await registerUser({
      firstName,
      lastName,
      email,
      location,
      // dob,
      // image,
    });
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

  const handleUpdateDOB = (event) => {
    setDob(event.target.value);
  };

  const handleUpdateImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className="registration">
      <form className="registration__form" onSubmit={handleRegister}>
        <TextInput
          labelText="First Name"
          onChangeEvent={handleUpdateFirstName}
        />
        <TextInput labelText="Last Name" onChangeEvent={handleUpdateLastName} />
        <TextInput labelText="Email" onChangeEvent={handleUpdateEmail} />
        <TextInput labelText="Location" onChangeEvent={handleUpdateLocation} />
        <Button label="Create Account" type="submit" />
      </form>
    </div>
  );
};

export default Registration;
