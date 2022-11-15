import React from "react";
import { UseUserContext } from "../context/useContext";
import Home from "../home/Home";
import Login from "../login/Login";

const Auth = () => {
  const { user } = UseUserContext();
  return <div>{user.pass ? <Login /> : <Home />}</div>;
};

export default Auth;
