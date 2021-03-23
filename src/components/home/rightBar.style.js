import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core";

const RightBarWrapper = styled.div`
  height: 100%;
  width: 350px;
  padding: 20px 30px;
  position: fixed;

  .trendBox {
    width: 100%;
    margin: 100px 0;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

    .trendContainer {
      font-family: "roboto";
      padding: 20px 15px;
      background-color: rgb(247, 249, 250);

      .subContent {
        color: #5b7083;
        font-size: 17px;
      }

      .titleContent {
        font-weight: 900;
        font-size: 20px;
      }

      .titleTrend {
        padding-bottom: 20px;
        font-size: 25px;
        font-weight: 900;
      }

      .contentBox {
        display: flex;
        flex-flow: column;
        border-top: 2px rgb(235, 238, 240) solid;
        border-bottom: 2px rgb(235, 238, 240) solid;
        padding: 20px 0;
      }

      .moreText {
        padding-top: 20px;
        cursor: pointer;
      }
    }
  }
`;

const useSearchStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "100%",
      borderRadius: "30px",
      backgroundColor: "rgb(247, 249, 250)"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));


export {RightBarWrapper, useSearchStyles}