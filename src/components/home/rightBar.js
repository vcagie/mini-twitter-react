import { IconButton, InputBase, Paper } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { RightBarWrapper, useSearchStyles } from "./rightBar.style";

const RightBar = () => {
  const classes = useSearchStyles();
  return (
    <RightBarWrapper>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase className={classes.input} placeholder="Search Twitter" />
      </Paper>

      <div className="trendBox">
        <div className="trendContainer">
          <div className="titleTrend">
            <span>Trend For You</span>
          </div>
          <div className="contentBox">
            <span className="subContent">Trending in Indonesia</span>
            <span className="titleContent">Dewa Kipas</span>
            <span className="subContent">1000+ tweets</span>
          </div>
          <div className="contentBox">
            <span className="subContent">Trending in Indonesia</span>
            <span className="titleContent">Dewa Kipas</span>
            <span className="subContent">1000+ tweets</span>
          </div>
          <div className="contentBox">
            <span className="subContent">Trending in Indonesia</span>
            <span className="titleContent">Dewa Kipas</span>
            <span className="subContent">1000+ tweets</span>
          </div>
          <div className="moreText logoColor">
            <span>Show More</span>
          </div>
        </div>
      </div>
    </RightBarWrapper>
  );
};

export default RightBar;
