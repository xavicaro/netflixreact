import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Paypal from "./Pages/Paypal";
import Profile from "./Pages/Profile";

function App() {

  const user = "Pepe";
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;
