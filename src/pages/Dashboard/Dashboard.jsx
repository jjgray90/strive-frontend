import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getUserActivities } from "../../api/activityService";
import UserContext from "../../context/UserContext";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import Button from "../../components/Button/Button";

const Dashboard = () => {
  const { user, userActivityData, setUserActivityData } =
    useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user !== undefined)
      getUserActivities(user.id, setUserActivityData);
  }, [user, setUserActivityData, navigate]);

  return (
    <div className="dashboard">
      {userActivityData !== undefined && userActivityData.length > 0 ? (
        <div className="dashboard__activities">
          {userActivityData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      ) : (
        <div className="dashboard__empty">
          <p>Welcome to Strive, {user?.firstName}!</p>
          <p>It looks like you're new here, let's add your first activity</p>
          <Button label="Add Activity" onClick={() => navigate("/upload")} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
