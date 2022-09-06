import "./ActivityCard.scss";

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <h3 className="activity-card__heading">{activity.location} Run</h3>
      <p className="activity-card__distance">{activity.distance} km</p>
      <p className="activity-card__pace">{activity.pace} /km</p>
      <p className="activity-card__time">{activity.time} minutes</p>
    </div>
  );
};

export default ActivityCard;
