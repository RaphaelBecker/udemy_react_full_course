import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // When useEffect executes? useEffect runs after the whole component was executed!
  // useEffect(anonymous arrow function: ()=>{} which gets executed whenever the dependency changes, [Array of dependencies]):
  // Explanantion: We do have an empty array of dependecies, therefor it will only run once at app start!
  useEffect(() => {
    const storedLoggedInUserInfo = localStorage.getItem("isLoggedIn");

    if (storedLoggedInUserInfo === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {" "}
      {props.children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContext;
