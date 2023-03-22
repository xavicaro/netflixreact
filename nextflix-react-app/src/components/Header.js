import { makeStyles } from '@mui/styles';
import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import logo from "../images/netflix-logo.png";

const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo}/>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
    root:{
      
    },
  }));

export default Header

