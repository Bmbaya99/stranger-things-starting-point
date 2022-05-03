import React, {useEffect, useState } from "react";
import {getUser} from "./api";




const UserProfile = () => {

    const [ user, setUser] = useState("");
     


    useEffect(async () => {
        const user = await getUser();
        console.log("posts test",user)
        setUser(user);
    }, []);
    
return (
    <h1>Welcome {user.data&&user.data.username}</h1>
)

   
    
}












export default UserProfile 