import { Box } from '@mui/system';
import React from 'react'
import logo from '../images/netflix-logo.png';
import HeroBanner from "../images/HeroBanner.jpg";
import { NetflixButton } from '../styled/styledcomponents';

const Login = () => {

    const logoStyles = {
        position: "fixed",
        top: 0,
        left: 20,
        width: "150px",
        cursor: "pointer",
    };

    const loginStyle = {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const buttonInitSessionStyles = {
        position: "fixed",
        zIndex:15,
        right:20,
        top:20,
    };

    return (
        <Box sx={loginStyle}>
            <Box component="img" src={logo} alt="logo" sx={logoStyles} />
            <NetflixButton style={buttonInitSessionStyles}>Iniciar sesion</NetflixButton>
        </Box>
    )
}
export default Login