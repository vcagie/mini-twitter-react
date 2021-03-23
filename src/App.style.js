import styled from "@emotion/styled";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;

  .main {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .full {
    width: 100%;
  }

  .logoColor {
    color: rgba(29, 161, 242, 1);
  }
`;

export { AppWrapper };
