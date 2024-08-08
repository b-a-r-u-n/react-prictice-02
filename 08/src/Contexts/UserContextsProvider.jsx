import { useState } from "react";
import UserContexts from "./UserContexts";

const UserContextsProvider = ({children}) => {
    const [data, setData] = useState(null);
    return(
        <UserContexts.Provider value={{data, setData}}>
            {children}
        </UserContexts.Provider>
    )
}

export default UserContextsProvider