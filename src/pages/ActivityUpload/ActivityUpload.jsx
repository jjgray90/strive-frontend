import "./ActivityUpload.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadActivity } from "../../api/activityService";
import { getUserActivities } from "../../api/userService";
import UserContext from "../../context/UserContext";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const ActivityUpload = () => {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [pace, setPace] = useState();
  const [location, setLocation] = useState();
  const { user, setUserActivityData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUpload = async (event) => {
    event.preventDefault();

    const result = await uploadActivity({
      distance,
      time,
      pace,
      location,
      user,
    });

    if (result.isSuccess) {
      getUserActivities(user.id, setUserActivityData);
      navigate("/dashboard");
    }
  };

  const handleUpdateDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleUpdateTime = (event) => {
    setTime(event.target.value);
  };

  const handleUpdatePace = (event) => {
    setPace(event.target.value);
  };

  const handleUpdateLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="activity-upload">
      <form
        className="activity-upload__form"
        method="POST"
        onSubmit={handleUpload}
      >
        <TextInput labelText="Distance" onChangeEvent={handleUpdateDistance} />
        <TextInput labelText="Time" onChangeEvent={handleUpdateTime} />
        <TextInput labelText="Pace" onChangeEvent={handleUpdatePace} />
        <TextInput labelText="Location" onChangeEvent={handleUpdateLocation} />
        <Button label="Upload Activity" type="submit" />
      </form>
    </div>
  );
};

export default ActivityUpload;
