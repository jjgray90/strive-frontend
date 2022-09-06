import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { getUserActivities } from "../../api/userService";
import UserContext from "../../context/UserContext";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

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
      <p>Welcome {user?.firstName}</p>
      <div className="dashboard__activities">
        {userActivityData !== undefined &&
          userActivityData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
