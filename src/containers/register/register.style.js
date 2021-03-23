import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core";

const RegisterWrapper = styled.div`
  width: 100%;
  font-family: "roboto";

  .registerComponent {
    display: flex;
    flex-flow: column;
    max-width: 400px;
    margin: auto;
    padding: 16px 20px;

    .MuiFormControl-root {
      margin: 0 0 15px 0;
      width: 100%;
    }

    .twitterLogo {
      .logoSize {
        height: 60px;
        width: 60px;
      }
    }

    h1 {
      font-weight: 900;
    }

    .registerButton {
      width: 100%;
      background-color: rgb(29, 161, 242);
      border-radius: 50px;
      text-align: center;
      padding: 15px 0;
      font-family: 'roboto';
      color: white;
      font-size: 18px;
      font-weight: 900;
      cursor: pointer;
      transition: 0.2s ease;

      :hover{
          background-color: rgb(26, 145, 218);
      }
    }

    .registerText{
        color: rgb(27, 149, 224);
        font-size: 18px;
        text-align: center;
        padding-top: 20px;
        :hover{
            text-decoration-line: underline;
        }
    }
  }
`;

const useStylesTextField = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: "rgb(29,161,242) 0 0 0 1px",
      borderColor: "rgb(29,161,242)",
    },
  },
  focused: {},
}));

const useModalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
    margin: "auto",
    zIndex: "2",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: "15px 25px 32px 25px",
    borderRadius: "15px",
    textAlign: "center",
    "&:focus": {
      outline: "none",
    },
    fontFamily: "roboto",
  },
  btn: {
    fontWeight: "700",
    borderRadius: "20px",
    width: "100%",
    padding: "15px 0",
    cursor: "pointer",
    transition: "0.2s ease",
    backgroundColor: "rgb(29, 161, 242)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(25, 145, 230)",
    },
  }
  
}));

export {RegisterWrapper, useStylesTextField, useModalStyles};
