import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
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

  const loginHandler = (email, password) => {
    // localStorage can be acceses in the Browser Dev Tools in Tab Application
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
