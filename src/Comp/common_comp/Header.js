import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {IconButton,AppBar,Toolbar,Avatar,Typography} from "@material-ui/core"
import {Menu,Apps,Notifications,Dashboard,AccountBox,ExitToApp,ArrowDropDown} from "@material-ui/icons"

import "../Comp_css/Dashboard.css";
import { logoutAdmin } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100%)`,
      marginLeft: "0px",
      zIndex: "1222",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Header({toggler}) {
  const classes = useStyles();
  const DropdownMenu = (props) => {
    const dispatch = useDispatch();

    function logout() {
      dispatch(logoutAdmin());
    }
    return (
      <div className="headerDropdownContainer">
        {props.menu}
        <div className="dropdown">
          <div className="upArrow"></div>
          {props.firstMenu}
          <ul className="headerDropdownMenu">
            <li>
              <span> <Dashboard /> DashBoard </span>
            </li>
            <li>
              <span><AccountBox />View Profile</span>
            </li>
            <li onClick={logout}>
              <span><ExitToApp />LogOut</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggler }
            className={classes.menuButton}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" noWrap>
            DashBoard
          </Typography>
          <div
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <IconButton style={{ color: "white" }}>
              <Apps />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <Notifications />
            </IconButton>

            <DropdownMenu
              menu={
                <a className="avatar">
                  <IconButton style={{ color: "white" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/40/40"
                      className={classes.small}
                    />
                  </IconButton>
                  <ArrowDropDown />
                </a>
              }
              // menus={[
              //   { label: "DashBoard", href: "/", icon: <DashboardIcon /> },
              //   { label: "View Profile", href: "/", icon: <Person /> },
              //   { label: "SignOut", href: "/", icon: <Out /> },
              // ]}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
