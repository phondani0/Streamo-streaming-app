import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { VideoCallRounded } from '@material-ui/icons';

import GoogleAuth from '../Auth/GoogleAuth';
import Styles from './Navbar.module.css';

const NavBar = () => {
  return(
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link className={Styles.UndecoratedLinks} to="/" >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <VideoCallRounded />
            <Typography variant="h5">Streamo</Typography>
            </IconButton>
          </Link>
          <div className={Styles.MenuItems}>
            <Link className={Styles.UndecoratedLinks} to="/streams/new" >
              <Button color="inherit">
                <i className="fa fa-plus"></i> &nbsp;
                New
              </Button>
            </Link>
            <GoogleAuth />
          </div>
        </Toolbar>
      </AppBar>
      <div className={ Styles.TopContainer }></div>
    </>
  );
};

export default NavBar;