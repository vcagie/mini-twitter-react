import React from "react";
import { SideBarWrapper } from "./sideBar.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import LinkBar from "./linkBar";

const SideBar = ({clearToken}) => {

  return (
    <SideBarWrapper>
      <div className="sideBarContent">
        <div>
          <div className="iconContainer">
            <div className="iconComponent ">
              <TwitterIcon className="iconImage logoColor" />
            </div>
          </div>

          <LinkBar
            icon={<HomeOutlinedIcon className="iconImage" />}
            pageName="Home"
            link="/"
            active="active"
          ></LinkBar>

          <LinkBar
            icon={<ExploreOutlinedIcon className="iconImage" />}
            pageName="Explore"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<NotificationsNoneOutlinedIcon className="iconImage" />}
            pageName="Notification"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<EmailOutlinedIcon className="iconImage" />}
            pageName="Messages"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<BookmarkBorderOutlinedIcon className="iconImage" />}
            pageName="Bookmarks"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<ListAltOutlinedIcon className="iconImage" />}
            pageName="List"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<PersonOutlineOutlinedIcon className="iconImage" />}
            pageName="Profile"
            link="/"
            active=""
          ></LinkBar>

          <LinkBar
            icon={<MoreHorizOutlinedIcon className="iconImage" />}
            pageName="More"
            link="/"
            active=""
          ></LinkBar>

          <div className="iconContainer" onClick={clearToken}>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
