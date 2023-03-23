import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, Avatar, IconButton } from '@mui/material';
import logo from '../images/netflix-logo.png';
import { useNavigate } from 'react-router';

const headerStyles = {
  backgroundColor: "#111",
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  margin:"0"
};

const logoStyles = {
  width: "100px",
  cursor: "pointer",
};

const transparentHeaderStyles = {
  backgroundColor: 'transparent',
};

const toolbarStyles = {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "center"
};

const Header = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', hideHeader);
    return () => {
      window.removeEventListener('scroll', hideHeader);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={show ? transparentHeaderStyles : headerStyles}
    >
      <Toolbar sx={toolbarStyles}>
        <IconButton onClick={() => navigate('/')}>
          <Box component="img" src={logo} alt="logo" sx={logoStyles} />
        </IconButton>
        <Avatar 
        variant="square" 
        sx={{ cursor: "pointer" }} 
        onClick={()=> navigate('/profile')}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
