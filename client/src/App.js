import React, { useState } from "react"
import Navbar from "./components/Navbar"
import "./App.css"

import Login from "./components/Screens/Login"

import Signup from "./components/Screens/Signup"

import Createpost from "./components/Screens/Createpost"
import ForgotPassword from "./components/Screens/ForgotPassword"
import Updatepassword from "./components/Screens/Updatepassword"
import { Route, Switch, useHistory } from "react-router-dom"
import { UserContext } from "./reducer/UserContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./customHooks/authHook"


const App = () => {
  // const [userDetails, setUserdetails] = useState({});
  // const setUserdetailsHandler = (data) => {
  //   setUserdetails(data)
  // }

  const auth = useAuth()
  const authContextValue = {
    userDetails: auth.userDetails,
    isLoggedIn: !!auth.token,  // return boolean
    token: auth.token,
    login: auth.login,
    logout: auth.logout,
    googleLogin: auth.googleLogin
    

  }
  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={ authContextValue}>
        <Navbar />

        <Switch>
        // component equal to { } kr ke b kr skta
         
          <Route exact path="/"><Login /></Route>
          
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/create"><Createpost /></Route>
          <Route exact path="/forgot"><ForgotPassword /></Route>
          <Route exact path="/reset/:token"><Updatepassword /></Route>
         
        </Switch>
      </UserContext.Provider>
    </>
  )
}
export default App