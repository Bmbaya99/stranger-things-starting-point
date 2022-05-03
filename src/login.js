import React, { useEffect, useState } from "react";
import { login,register } from "./api"


const Login = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerusername, setregisterUsername] = useState("");
    const [registerpassword, setregisterPassword] = useState("");

    const handleregister = async (event) => {
        event.preventDefault()
        let response = await register(username, password);
        console.log (response)
      
      }
      const handleLogin = async (event) => { event.preventDefault()
        let response = await login(username, password);
        console.log (response)
      }
  
      
      
      useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"))
      }, []);
      console.log("user logged in", isLoggedIn)

return (<div>
    <form onSubmit = {handleLogin} id={"loginButtons"}>
        
        <label>Enter Username:</label>
        <input type={"text"} 
        value={username} 
        onChange={(event) => {
            setUsername(event.target.value)
        }} 
        placeholder={"Enter username"}/>

        <label>Enter Password:</label>          
        <input 
        type={"text"} 
        min={8} 
        value={password} 
        onChange={(event) => {
            setPassword(event.target.value)
        }}
        placeholder={"Enter password"}/>

        <button 
        >Login</button>

        {/* <button onClick={handleRegister}>Register</button> */}
    </form>
    <form onSubmit = {handleregister} id={"loginButtons"}>
        
        <label>Enter Username:</label>
        <input type={"text"} 
        value={registerusername} 
        onChange={(event) => {
            setregisterUsername(event.target.value)
        }} 
        placeholder={"Enter username"}/>

        <label>Enter Password:</label>          
        <input 
        type={"text"} 
        min={8} 
        value={registerpassword} 
        onChange={(event) => {
            setregisterPassword(event.target.value)
        }}
        placeholder={"Enter password"}/>

        <button 
        >register</button>

        {/* <button onClick={handleRegister}>Register</button> */}
    </form>
    <button onClick={(event) => {
        event.preventDefault()
        setIsLoggedIn(false);
        localStorage.removeItem("token")
    }}>Logout</button>
    </div>
    )
}

export default Login; 