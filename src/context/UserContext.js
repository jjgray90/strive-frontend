import { createContext, useEffect, useState } from "react";

const UserContext = new createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userActivityData, setUserActivityData] = useState();
  const [firstName, setUserFirstName] = useState();
  const [lastName, setUserLastName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [dob, setDob] = useState();
  const [image, setImage] = useState();
  const [km, setKm] = useState(true);

  const handleUpdateFirstName = (event) => {
    setUserFirstName(event.target.value);
  };

  const handleUpdateLastName = (event) => {
    setUserLastName(event.target.value);
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleUpdateUOM = (event) => {
    const boolean = event.target.value === "true";
    setKm(boolean);
  };

  const handleUpdateDOB = (event) => {
    setDob();
  };

  const handleUpdateImage = (event) => {
    setImage(event.target.value);
  };

  useEffect(() => {
    setUserFirstName(user?.firstName);
    setUserLastName(user?.lastName);
    setEmail(user?.email);
    setLocation(user?.location);
    setDob(user?.dob);
    setImage(user?.image);
    setKm(user?.km);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userActivityData,
        setUserActivityData,
        handleUpdateFirstName,
        handleUpdateLastName,
        handleUpdateEmail,
        handleUpdateLocation,
        handleUpdateUOM,
        handleUpdateDOB,
        handleUpdateImage,
        firstName,
        lastName,
        email,
        location,
        dob,
        image,
        km,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
