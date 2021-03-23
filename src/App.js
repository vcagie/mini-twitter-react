import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { AppWrapper } from "./App.style";
import "./App.css";
import Home from "./containers/home/home";
import SideBar from "./components/sideBar/sideBar";
import "fontsource-roboto";
import Login from "./containers/login/login";
import Register from "./containers/register/register";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken
}

function getUsername() {
  const usernameString = sessionStorage.getItem("username");
  const username = JSON.parse(usernameString);
  return username;
}

function App() {
  const [token, setToken] = useState(getToken);
  const [username, setUsername] = useState(getUsername);

  const setLoginValue = (loginData) => {
    if (loginData.token) {
      setUsername(loginData.username);
      setToken(loginData.token);
    }
  };

  const clearToken = () => {
    setUsername(undefined);
    setToken(undefined);
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("username", JSON.stringify(username));
      sessionStorage.setItem("token", JSON.stringify(token));
    } else {
      sessionStorage.clear();
    }
  }, [token, username]);

  if (!token) {
    return (
      <AppWrapper>
        <Switch>
          <Route path="/login" exact>
            <Login setLoginData={setLoginValue} />
          </Route>
          <Route path="/register" component={Register} exact />
          <Redirect to="/login" />
        </Switch>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      {token && <SideBar clearToken={clearToken} />}
      <div className={token === undefined ? "full" : "main"}>
        <Switch>
          <Redirect from="/login" to="/" />
          <Route path="/" component={Home} exact />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </AppWrapper>
  );
}

export default withRouter(App);
