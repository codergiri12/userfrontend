import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../common_comp/Header';
import SideBar from '../common_comp/SideBar';
import Add_Posts from './Add_Posts';

// here adding new post
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
}));

function Dash_Posts() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header toggler={handleDrawerToggle} />
        <SideBar mobileOpen={mobileOpen} toggler={handleDrawerToggle} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Add_Posts />
        </main>
      </div>
    </>
  );
}

export default Dash_Posts;
