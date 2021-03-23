import { makeStyles, MenuItem, withStyles, Menu, ListItemText } from "@material-ui/core";

const useDeleteModalStyles = makeStyles((theme) => ({
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
  desc: {
    color: "#5B7083",
  },
  btnGroup: {
    paddingTop: "15px",
    display: "flex",
    justifyContent: "space-around",
    fontWeight: "700",
  },
  btn: {
    borderRadius: "20px",
    width: "45%",
    padding: "15px 0",
    cursor: "pointer",
    transition: "0.2s ease"
  },
  cancelButton: {
    backgroundColor: "#EBEEF0",
    "&:hover": {
      backgroundColor: "rgb(188, 190, 192)",
    },
  },
  deleteButton: {
    backgroundColor: "#E0245E",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(179, 29, 75)",
    },
  },
}));

const useEditModalStyles = makeStyles((theme) => ({
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
      width: "100%",
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
    txt:{
        width: "100%"
    },
    btnGroup: {
      paddingTop: "15px",
      display: "flex",
      justifyContent: "space-around",
      fontWeight: "700",
    },
    btn: {
      borderRadius: "20px",
      width: "45%",
      padding: "15px 0",
      cursor: "pointer",
      transition: "0.2s ease"
    },
    cancelButton: {
      backgroundColor: "#EBEEF0",
      "&:hover": {
        backgroundColor: "rgb(188, 190, 192)",
      },
    },
    deleteButton: {
      backgroundColor: "#E0245E",
      color: "white",
      "&:hover": {
        backgroundColor: "rgb(179, 29, 75)",
      },
    },
  }));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "200px",
  },
  list: {
    padding: "0",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    disableAutoFocusItem={true}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: "rgba(0, 0, 0, 0.07)",
      },
      fontFamily: "roboto",
      fontSize: "20px",
      padding: "15px 10px",
    },
  }))(MenuItem);


  const StyledListItemDelete = withStyles((props) => ({
    root: {
      color: "red",
    },
  }))(ListItemText);

export { useDeleteModalStyles, useEditModalStyles, StyledMenu, StyledMenuItem, StyledListItemDelete };
