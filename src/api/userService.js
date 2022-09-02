export const registerUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
  } catch (error) {
    alert(error.message);
  }
};
