import React from "react";
import { NavLink } from "react-router-dom";

const LinkBar = ({icon, pageName, link, active}) => {
  return (
    <div className="iconContainer">
      <NavLink
        exact
        to={link}
        activeClassName={active}
        className="linkContainer"
      >
        <div className="iconComponent logoComponent">{icon}</div>
        <span>{pageName}</span>
      </NavLink>
    </div>
  );
};

export default LinkBar;
