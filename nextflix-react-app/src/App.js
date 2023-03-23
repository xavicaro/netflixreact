import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Counter } from './features/counter/Counter';
import React from 'react';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Paypal from "./Pages/Paypal";
import Profile from "./Pages/Profile";
import { Box } from '@mui/material';

function App() {
  const user = null;
  
  const appStyles = {
    minHeight: "100vh",
    // backgroundColor:"#111"
  };

  return (
    <Box sx={appStyles}>
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<Paypal />} />
              <Route path='/' element={<Home />} />
            </Routes>
          )
        }
      </Router>
    </Box>
  );
}

export default App;
