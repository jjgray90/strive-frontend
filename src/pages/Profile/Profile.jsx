import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { updateUser } from "../../api/userService";
import UserContext from "../../context/UserContext";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const Profile = () => {
  const {
    user,
    handleUpdateFirstName,
    handleUpdateLastName,
    handleUpdateEmail,
    handleUpdateLocation,
    handleUpdateUOM,
    handleUpdateDOB,
    handleUpdateImage,
    firstName,
    lastName,
    email,
    location,
    dob,
    image,
    km,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();

    const result = await updateUser(user.id, {
      firstName,
      lastName,
      email,
      location,
      km,
      dob,
      image,
    });

    if (result.isSuccess) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="profile">
      <div className="profile__container">
        <form className="profile__form" onSubmit={handleUpdate}>
          <TextInput
            labelText="First Name"
            placeholder={user?.firstName}
            onChangeEvent={handleUpdateFirstName}
          />
          <TextInput
            labelText="Last Name"
            placeholder={user?.lastName}
            onChangeEvent={handleUpdateLastName}
          />
          <TextInput
            labelText="Email"
            placeholder={user?.email}
            onChangeEvent={handleUpdateEmail}
          />
          <TextInput
            labelText="Location"
            placeholder={user?.location}
            onChangeEvent={handleUpdateLocation}
          />
          <Button label="Update Profile" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
