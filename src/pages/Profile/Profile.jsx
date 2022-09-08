import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="profile">
      <div className="profile__container">
        <form className="profile__form">
          <TextInput labelText="First Name" placeholder={user?.firstName} />
          <TextInput labelText="Last Name" placeholder={user?.lastName} />
          <TextInput labelText="Email" placeholder={user?.email} />
          <TextInput labelText="Location" placeholder={user?.location} />
          <Button label="Update Profile" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
