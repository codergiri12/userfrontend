import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Orders from '@material-ui/icons/EventNote';
import Products from '@material-ui/icons/ShoppingBasket';
import Down from '@material-ui/icons/ArrowDropDown';
import Up from '@material-ui/icons/ArrowDropUp';
import Out from '@material-ui/icons/ExitToApp';
import Person from '@material-ui/icons/AccountBox';

import '../Comp_css/Dashboard.css'
import Dash_Posts from './Dash_comp/Dash_Posts'
import Dash_Orders from './Dash_comp/Dash_Orders'
import Main_Dash from './Dash_comp/Main_Dash'
import { logoutAdmin } from '../actions';

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

const DropdownMenu = (props) => {
  
  const dispatch = useDispatch();

  function logout(){
    dispatch(logoutAdmin());
  }
  return (
    <div className="headerDropdownContainer">
      {props.menu}
      <div className="dropdown">
        <div className="upArrow"></div>
        {props.firstMenu}
        <ul className="headerDropdownMenu">
          {
            props.menus && props.menus.map((item, index) =>
              <li key={index} onClick={item.label==='SignOut' ? (logout): null} >
                <span >{item.icon}{item.label}</span>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

function Dash_Board(props) {
  const [activeItem , setActiveItem] = useState('DashBoard');
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listItems = [
    {
      text:'DashBoard',
      logo:<DashboardIcon />
    },
    {
      text:'Posts',
      logo:<Products />
    },
  ]

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {listItems.map((obj, index) => (
          <ListItem button key={index} onClick={()=>{setActiveItem(obj.text)}} >
            <ListItemIcon>{obj.logo}</ListItemIcon>
            <ListItemText primary={obj.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DashBoard
          </Typography>
          <div style={{color:'white',display:'flex',alignItems:'center'}}>
            <IconButton style={{color:'white'}}>
              <AppsIcon />
            </IconButton>
            <IconButton style={{color:'white'}}>
              <NotificationsIcon />
            </IconButton>
            
            <DropdownMenu
            menu={
              <a className="avatar">
                <IconButton style={{color:'white'}}>
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/40/40" className={classes.small} />
                </IconButton>
                <Down />
              </a>
            }
            menus={[
              { label: 'DashBoard', href: '/', icon: <DashboardIcon />,},
              { label: 'View Profile', href: '/', icon: <Person />, },
              { label: 'SignOut', href: '/', icon: <Out />,}
            ]}
          />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          activeItem==='DashBoard' && (
            <Main_Dash />
          )
        }
        {
          activeItem==='Posts' && (
            <Dash_Posts />
          )
        }
      </main>
    </div>
  );
}

Dash_Board.propTypes = {
  window: PropTypes.func,
};

export default Dash_Board;