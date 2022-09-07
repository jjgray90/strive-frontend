import "./ActivityCard.scss";
import { deleteActivity, getUserActivities } from "../../api/activityService";
import Button from "../Button/Button";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ActivityCard = ({ activity }) => {
  const { user, setUserActivityData } = useContext(UserContext);

  const unitOfMeasureJSX = user?.km ? "km" : "miles";

  const convertSeconds = (seconds) => {
    return new Date(seconds * 1000)
      .toISOString()
      .slice(seconds >= 3600 ? 11 : 14, 19);
  };

  const handleActivityDelete = async (event) => {
    event.preventDefault();

    const result = await deleteActivity(activity.id);

    if (result.isSuccess) {
      getUserActivities(user.id, setUserActivityData);
    }
  };

  return (
    <div className="activity-card">
      <h3 className="activity-card__heading">{activity.location} Run</h3>
      <p className="activity-card__distance">
        {activity.distance} {unitOfMeasureJSX}
      </p>
      <p className="activity-card__pace">
        {convertSeconds(activity.pace)} /{unitOfMeasureJSX}
      </p>
      <p className="activity-card__time">{convertSeconds(activity.time)}</p>
      <Button label="Delete Activity" onClick={handleActivityDelete} />
    </div>
  );
};

export default ActivityCard;
