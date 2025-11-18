import React, { useState } from "react";
import UserContext from "./userContext.js";

const UserContextProvider = (children) => {
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provider val={{user,setUser}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider