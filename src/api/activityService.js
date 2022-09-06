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
