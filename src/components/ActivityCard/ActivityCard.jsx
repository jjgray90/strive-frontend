import "./ActivityCard.scss";
import { deleteActivity, getUserActivities } from "../../api/activityService";
import Button from "../Button/Button";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ActivityCard = ({ activity }) => {
  const { user, setUserActivityData } = useContext(UserContext);

  const unitOfMeasureJSX = user?.km ? "km" : "m";

  const convertSeconds = (seconds) => {
    return new Date(seconds * 1000)
      .toISOString()
      .slice(seconds >= 3600 ? 12 : seconds <= 600 ? 15 : 14, 19);
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
      <div className="activity-card__grid">
        <div className="activity-card__distance">
          <p className="activity-card__label">Distance</p>
          <p>
            {activity.distance} {unitOfMeasureJSX}
          </p>
        </div>
        <div className="activity-card__pace">
          <p className="activity-card__label">Pace</p>
          <p>
            {convertSeconds(activity.pace)} /{unitOfMeasureJSX}
          </p>
        </div>
        <div className="activity-card__time">
          <p className="activity-card__label">Time</p>
          <p>{convertSeconds(activity.time)}</p>
        </div>
      </div>
      <div className="activity-card__delete">
        <Button label="Delete Activity" onClick={handleActivityDelete} />
      </div>
    </div>
  );
};

export default ActivityCard;
