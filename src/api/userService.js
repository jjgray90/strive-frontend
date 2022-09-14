export const setCurrentUser = async (email, setUser) => {
  try {
    const response = await fetch(`http://localhost:8080/user/email/${email}`);

    if (!response.ok) {
      throw new Error(response.status + " error with request");
    } else {
      const data = await response.json();
      setUser({ ...data });
      localStorage.setItem("userEmail", data.email);
    }
  } catch (error) {
    alert(error.message);
  }
};

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
    } else
      return {
        isSuccess: true,
      };
  } catch (error) {
    alert(error.message);
    return { isSuccess: false };
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`http://localhost:8080/user/update/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(userData),
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
