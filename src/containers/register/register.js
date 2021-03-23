import React, { useState } from "react";
import { useHistory, withRouter } from "react-router";
import { RegisterWrapper, useStylesTextField, useModalStyles } from "./register.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { registerUser } from "../../services/authService";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [openModal, setOpenModal] = useState(false); 
  const history = useHistory();
  const modalClasses = useModalStyles();
  var error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(username, password);

    if (res.message) {
      setErrorMessage(res.message);
      return;
    }
    error = <></>;
    handleOpenModal();
  };

  const redirectToLogin = () => {
    return history.push("/login");
  }

  if (errorMessage) {
    error = <Alert severity="error">{errorMessage}</Alert>;
  } else {
    error = <></>;
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <RegisterWrapper>
      <div className="registerComponent">
        <div className="twitterLogo">
          <TwitterIcon className="logoColor logoSize" />
        </div>
        <h1>Create Your Account</h1>

        <StyledTextField
          label="Username"
          variant="filled"
          id="username-input"
          setvalue={(e) => setUserName(e.target.value)}
        />

        <StyledTextField
          label="Password"
          variant="filled"
          id="password-input"
          type="password"
          setvalue={(e) => setPassword(e.target.value)}
        />

        <div className="registerButton" onClick={handleSubmit}>
          Register
        </div>
        <a className="registerText" href="/login">
          Log in
        </a>
        {error}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        className={modalClasses.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={modalClasses.paper}>
            <h2 id="transition-modal-title">Success Register</h2>

            <div
              className={modalClasses.btn}
              onClick={redirectToLogin}
            >
              Log in
            </div>
          </div>
        </Fade>
      </Modal>
    </RegisterWrapper>
  );
};

export default withRouter(Register);
