import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Divider,Drawer,Hidden,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard';
import Orders from '@material-ui/icons/EventNote';
import Products from '@material-ui/icons/ShoppingBasket';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

import '../Comp_css/Dashboard.css'
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100%)`,
      marginLeft: '0px',
      zIndex:'1222'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0px 0px 4px 0.01em #ff005e',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function SideBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className="Side_List" >
          <NavLink exact to='/users'>
            <div className="item_cont">
              <ListItem button onClick={() => {} }>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary='My Posts' />
              </ListItem>
            </div>
          </NavLink>
          <NavLink to='/posts'>
            <div className="item_cont">
              <ListItem  button   onClick={() => {} }>
                <ListItemIcon><Products /></ListItemIcon>
                <ListItemText primary='Add Post' />
              </ListItem>
            </div>
          </NavLink>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={props.mobileOpen}
            onClose={props.toggler}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default SideBar;
