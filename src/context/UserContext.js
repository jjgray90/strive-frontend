import { createContext, useState } from "react";



const UserContext = new createContext({user: null});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}