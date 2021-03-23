import styled from '@emotion/styled';

const SideBarWrapper = styled.div`
  height: 100%;
  width: 100%;
  width: 25%;

  .sideBarContent {
    height: 100%;
    width: 275px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .iconContainer {
    border-radius: 50px;
    cursor: pointer;
    width: fit-content;
    margin: 10px 0;

    .iconColor {
      color: #0f1419;
    }

    .iconComponent {
      height: 3.5rem;
      width: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .iconImage {
        font-size: 2.5rem;
      }
    }

    span {
      font-family: "roboto";
      display: flex;
      align-items: center;
      font-size: 23px;
      font-weight: 700;
      color: #0f1419;
      padding: 15px 15px;
    }

    .linkContainer {
      display: flex;
      flex-direction: row;
    }

    :hover {
      background-color: rgba(29, 161, 242, 0.2);
      transition: 0.2s ease;

      .iconComponent,
      span {
        color: rgba(29, 161, 242, 1);
      }
    }

    .active {
      .iconComponent,
      span {
        color: rgba(29, 161, 242, 1);
      }
    }
  }
`;

export { SideBarWrapper };