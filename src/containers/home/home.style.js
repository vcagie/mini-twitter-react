import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  span {
    font-family: "roboto";
  }

  .mainContent {
    width: 60%;
    border-right: 1px solid;
    border-left: 1px solid;
    border-color: rgb(235, 238, 240);

    .homeTitle {
      padding: 20px 15px;
      border-bottom: 1px solid rgb(235, 238, 240);

      span {
        font-weight: 900;
        font-size: 28px;
      }
    }

    .photoContainer {
      width: 8%;
      margin-right: 2%;
      .photoFrame {
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-color: grey;
      }
    }

    .tweetContainer {
      width: 96%;
      display: flex;
      padding: 10px 2%;

      .inputContainer {
        width: 88%;

        textarea {
          width: 98%;
          resize: none;
          outline: none;
          border: none;
          font-family: roboto;
          font-size: 23px;

          :focus {
            border-bottom: 1px solid rgb(235, 238, 240);
          }
        }

        .buttonContainer {
          display: flex;
          justify-content: space-between;

          .iconContainer {
            .iconImage {
              font-size: 2.1rem;
              padding-right: 10px;
              color: rgba(29, 161, 242, 1);
            }
          }

          .tweetButton {
            cursor: pointer;
            padding: 12px 25px;
            border-radius: 50px;
            background-color: rgba(29, 161, 242, 1);

            span {
              font-size: 20px;
              font-weight: 700;
              color: white;
            }

            :hover {
              background-color: rgba(29, 161, 242, 0.8);
              transition: 0.2s ease;
            }
          }
        }
      }
    }

    .contentBorder {
      height: 12px;
      background-color: rgb(247, 249, 250);
      border-top: 1px rgb(235, 238, 240) solid;
      border-bottom: 1px rgb(235, 238, 240) solid;
    }

    .tweetSection {
      width: 96%;
      display: flex;
      padding: 10px 2%;
      border-top: 1px rgb(235, 238, 240) solid;
      border-bottom: 1px rgb(235, 238, 240) solid;

      .textSection {
        width: 88%;

        .topTextSection {
          display: flex;
          justify-content: space-between;

          .nameAndDate{
            font-size: 20px;
            margin: auto 0;
          }

          .moreMenuIcon {
            cursor: pointer;
            border-radius: 50%;
            width: 1.25em;
            height: 1.25em;
            color: rgb(91, 112, 131);
            padding: 4px 4px;
            :hover {
              background-color: rgba(29, 161, 242, 0.2);
              transition: 0.2s ease;

              .moreMenuIcon {
                color: rgba(29, 161, 242, 1);
              }
            }
          }
        }

        .mainTextSection{
          font-size: 18px;
        }

        .tweetIconSection {
          width: 90%;
          padding: 15px 0 10px 0;
          display: flex;
          justify-content: space-between;
          color: rgb(91, 112, 131);
        }
      }
    }
  }
  .rightBar {
    width: 40%;
  }
`;

export { HomeWrapper };
