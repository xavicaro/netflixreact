import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    appStyles: {
      minHeight: '100vh',
      backgroundColor:"#111",
    },
  })
);

function App() {
  const user = "pepe";
  const classes = useStyles();

  return (
    <Box className={classes.appStyles}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Paypal />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
    </Box>
  );
}

export default App;
