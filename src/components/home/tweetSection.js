import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  useDeleteModalStyles,
  useEditModalStyles,
  StyledListItemDelete,
  StyledMenuItem,
  StyledMenu,
} from "./tweetSection.style";
import { TextField } from "@material-ui/core";

const TweetSection = ({ tweetData, loginUsername, deleteTweet, editTweet }) => {
  const deleteModalClasses = useDeleteModalStyles();
  const editModalClasses = useEditModalStyles();
  
  const [settingMenu, setSettingMenu] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false); 
  const [openEditModal, setOpenEditModal] = useState(false); 
  const [editedTweet, setEditedTweet] = useState(tweetData.tweet);
  
  const username = tweetData.username;
  const dateJSON = tweetData.updatedat;
  const tweetContent = tweetData.tweet;

  const options = { year: 'numeric', month: 'short', day: 'numeric' , hour: 'numeric', minute: 'numeric', second: 'numeric'};
  const date = new Date(dateJSON).toLocaleDateString("en-US", options);


  const handleClick = (event) => {
    setSettingMenu(event.currentTarget);
  };

  const handleClose = () => {
    setSettingMenu(null);
  };

  const handleDelete = () => {
    deleteTweet(tweetData.tweetid);
    handleCloseDeleteModal();
    handleClose();
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleSubmitEdit = () =>{
    editTweet(tweetData.tweetid, editedTweet);
    handleCloseEditModal();
  }

  return (
    <div className="tweetSection">
      <div className="photoContainer">
        <div className="photoFrame"></div>
      </div>
      <div className="textSection">
        <div className="topTextSection">
          <div className="nameAndDate">
            <span>{username}</span>
            <span> &middot; </span>
            <span> {date}</span>
          </div>

          {loginUsername === username ? (
            <MoreHorizOutlinedIcon
              className="moreMenuIcon"
              onClick={handleClick}
            />
          ) : (
            <></>
          )}

          <StyledMenu
            id="simple-menu"
            anchorEl={settingMenu}
            keepMounted
            open={username === loginUsername && Boolean(settingMenu)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={handleOpenEditModal}>
              <ListItemIcon>
                <EditOutlinedIcon fontSize="default" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleOpenDeleteModal}>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon fontSize="default" color="error" />
              </ListItemIcon>
              <StyledListItemDelete primary="Delete" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
        <div className="mainTextSection">
          <span>{tweetContent}</span>
        </div>
        <div className="tweetIconSection">
          <ChatBubbleOutlineOutlinedIcon />
          <AutorenewOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <ShareOutlinedIcon />
          <AssessmentOutlinedIcon />
        </div>

        {/* delete */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={deleteModalClasses.modal}
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openDeleteModal}>
            <div className={deleteModalClasses.paper}>
              <h2 id="transition-modal-title">Delete Tweet?</h2>
              <span
                id="transition-modal-description"
                className={deleteModalClasses.desc}
              >
                This can’t be undone and it will be removed from your profile,
                the timeline of any accounts that follow you, and from Twitter
                search results.
              </span>
              <div className={deleteModalClasses.btnGroup}>
                <div
                  className={`${deleteModalClasses.cancelButton} ${deleteModalClasses.btn}`}
                  onClick={handleCloseDeleteModal}
                >
                  Cancel
                </div>
                <div
                  className={`${deleteModalClasses.deleteButton} ${deleteModalClasses.btn}`}
                  onClick={handleDelete}
                >
                  Delete
                </div>
              </div>
            </div>
          </Fade>
        </Modal>

        {/* edit */}
        <Modal
          aria-labelledby="transition-edit-modal-title"
          aria-describedby="standard-basic"
          className={editModalClasses.modal}
          open={openEditModal}
          onClose={handleCloseEditModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openEditModal}>
            <div className={editModalClasses.paper}>
              <h2 id="transition-modal-title">Edit Tweet</h2>

              <TextField
                id="standard-basic"
                value={editedTweet}
                className={editModalClasses.txt}
                onChange={(e) => setEditedTweet(e.target.value)}
              />

              <div className={editModalClasses.btnGroup}>
                <div
                  className={`${editModalClasses.cancelButton} ${editModalClasses.btn}`}
                  onClick={handleCloseEditModal}
                >
                  Cancel
                </div>
                <div
                  className={`${editModalClasses.deleteButton} ${editModalClasses.btn}`}
                  onClick={handleSubmitEdit}
                >
                  Edit
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default TweetSection;
