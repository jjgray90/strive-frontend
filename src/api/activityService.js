export const uploadActivity = async (activityData) => {
  try {
    const response = await fetch(`http://localhost:8080/activity`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activityData),
    });

    if (!response.ok) {
      throw new Error(response.status + " error with request");
    } else
      return {
        isSuccess: true,
      };
  } catch (error) {
    alert(error.message);
    return { isSuccess: false };
  }
};

export const getUserActivities = async (userId, setUserActivityData) => {
  try {
    const response = await fetch(
      `http://localhost:8080/user/activities/${userId}`
    );

    if (!response.ok) {
      throw new Error(response.status + " error with request");
    } else {
      const data = await response.json();
      setUserActivityData([...data]);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const deleteActivity = async (activityId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/user/activity/delete/${activityId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    } else
      return {
        isSuccess: true,
      };
  } catch (error) {
    alert(error.message);
    return { isSuccess: false };
  }
};
