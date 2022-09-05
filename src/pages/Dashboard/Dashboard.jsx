import "./Dashboard.scss";
import { useContext, useEffect } from "react";
import { getUserActivities } from "../../api/userService";
import UserContext from "../../context/UserContext";

const Dashboard = () => {
  const { user, userActivityData, setUserActivityData } =
    useContext(UserContext);





  useEffect(() => {
    if (user !== undefined) getUserActivities(user.id, setUserActivityData);
  }, [user, setUserActivityData]);

  return (
    <div className="dashboard">
      <p>Welcome {user?.firstName}</p>
      {userActivityData !== undefined &&
        userActivityData.map((activity) => (
          <p key={activity.id}>{activity.distance}</p>
        ))}
    </div>
  );
};

export default Dashboard;
