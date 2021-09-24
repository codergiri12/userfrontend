import React from "react";
import "./Comp_css/Header.css";
import {Link} from "react-router-dom";
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
function Header() {
  return (
    <nav className="header">
        <div className="left__header">
          <Link className="navbar-brand" to="/">
            User DashBoard
          </Link>
        </div>
        <ul className="right__header">
          <li>
            <Link to="/signup" className="right-links">
              <AssignmentIndRoundedIcon /> Sign Up
            </Link>
          </li>
          <li>
            <Link to="/signin" className="right-links">
              <ExitToAppRoundedIcon /> Login
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Header;
