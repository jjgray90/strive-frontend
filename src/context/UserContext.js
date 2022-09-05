import { createContext, useState } from "react";



const UserContext = new createContext({user: null});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const [userActivityData, setUserActivityData] = useState();

    return (
        <UserContext.Provider value={{user, setUser, userActivityData, setUserActivityData}}>{children}</UserContext.Provider>
    )
}

export default UserContext;
