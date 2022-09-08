import "./ActivityUpload.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadActivity, getUserActivities } from "../../api/activityService";
import UserContext from "../../context/UserContext";
import TextInput from "../../components/TextInput/TextInput";
import TimeInput from "../../components/TimeInput/TimeInput";
import Button from "../../components/Button/Button";

const ActivityUpload = () => {
  const [distance, setDistance] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
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

  const unitOfMeasureJSX = user?.km ? "km" : "miles";

  const handleUpdateDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleUpdatePace = (time, distance) => {
    setPace(time / distance);
  };

  const handleUpdateLocation = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    setTime(hours + minutes + seconds);
    handleUpdatePace(time, distance);
  }, [time, distance, hours, minutes, seconds]);

  return (
    <div className="activity-upload">
      <div className="activity-upload__container">
        <h3 className="activity-upload__heading">Add a Run</h3>
        <form
          className="activity-upload__form"
          method="POST"
          onSubmit={handleUpload}
        >
          <TextInput
            labelText={`Distance (${unitOfMeasureJSX})`}
            onChangeEvent={handleUpdateDistance}
          />
          <TimeInput
            labelText="Time (h : m : s)"
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
          <TextInput
            labelText="Location"
            onChangeEvent={handleUpdateLocation}
          />
          <Button label="Upload Activity" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ActivityUpload;
