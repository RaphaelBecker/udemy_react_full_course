import React, { Fragment, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const context = useContext(AuthContext);

  // Context is only used when a state is shared across multiple components, usually props is still used
  // <React.Fragment> is no more needed as root level becaus of <AuthContext.Provider>
  // Everywhere the authentication inforamtion is needed: Wrap <AuthContext.Provider> around!
  // As AuthContext is not a React Component, we have to call <AuthContext.Provider> to make it a Component.
  // AuthContext.Provider makes it possible to jump over multiple layers of Components
  // WE do not exchange onLogin and onLogout in <Login> and <Logout> because the Handler are directly used in those Components, hence no need to jump
  // across multiple layers
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login onLogin={context.onLogin} />}
        {context.isLoggedIn && <Home onLogout={context.onLogout} />}
      </main>
    </Fragment>
  );
}

export default App;
