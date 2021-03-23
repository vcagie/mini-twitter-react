import React, { useState } from "react";
import { withRouter } from "react-router";
import { LoginWrapper, useStylesTextField } from "./login.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TextField } from "@material-ui/core";
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { loginUser } from "../../services/authService";

function StyledTextField(props) {
  const classes = useStylesTextField();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      onChange={props.setvalue}
      label={props.label}
      variant={props.variant}
      id={props.id}
      type={props.type}
    />
  );
}

const Login = ({setLoginData}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  var error;

  const handleSubmit = async e =>{
    e.preventDefault();
    const res = await loginUser(username, password);

    if(res.message){
      setErrorMessage(res.message);
      return;
    }
    
    setLoginData(res);
  }

  if (errorMessage) {
    error = <Alert severity="error">{errorMessage}</Alert>;
  } else {
    error = <></>;
  }

  return (
    <LoginWrapper>
      <div className="loginComponent">
        <div className="twitterLogo">
          <TwitterIcon className="logoColor logoSize" />
        </div>
        <h1>Log in to Twitter</h1>

        <StyledTextField
          label="Username"
          variant="filled"
          id="username-input"
          setvalue = {e => setUserName(e.target.value)}
        />

        <StyledTextField
          label="Password"
          variant="filled"
          id="password-input"
          type="password"
          setvalue = {e => setPassword(e.target.value)}
        />

        <div className="loginButton" onClick={handleSubmit}>Log in</div>
        <a className="registerText" href="/register">Sign Up for twitter</a>
        {error}
      </div>
    </LoginWrapper>
  );
};

export default withRouter(Login);

Login.propTypes = {
  setLoginData: PropTypes.func.isRequired
};

