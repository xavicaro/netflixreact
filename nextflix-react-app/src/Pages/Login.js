import { Box } from '@mui/system';
import React from 'react'
import logo from '../images/netflix-logo.png';
import HeroBanner from "../images/HeroBanner.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { Typography } from '@mui/material';

const Login = () => {
    
    const styles = {
        logoStyles: {
            position: "fixed",
            top: 0,
            left: 20,
            width: "150px",
            cursor: "pointer",
        },
        loginStyle: {
            position: 'relative',
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${HeroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        buttonInitSessionStyles: {
            position: "fixed",
            zIndex: 15,
            right: 20,
            top: 20,
        },
        infoStyles: {
            color: '#fff',
            zIndex: 15,
            textAlign: "center",
            "& h4": {
                fontWeight: 800,
            },
            "& h5": {
                fontWeight: 400,
            },
        },
        containerStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // gap: theme.spacing(2),
        }
    };
    return (
        <Box sx={styles.loginStyle}>
            <Box component="img" src={logo} alt="logo" sx={styles.logoStyles} />
            <NetflixButton style={styles.buttonInitSessionStyles}>Iniciar sesion</NetflixButton>
            <Box sx={styles.containerStyles}>
                <Box sx={styles.infoStyles}>
                    <Typography variant='h4' gutterBottom>
                        Unlimited films, TV programmes and more.
                    </Typography>
                    <Typography variant='h5'>
                        Watch anywhere. Cancel at any time.
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        Ready to watch ? Enter your email to create or restart your
                        membership.
                    </Typography>
                </Box>
                <Box>
                    <NetflixInput placeholder='Email address' />
                    <NetflixButton>GET STARTED</NetflixButton>
                </Box>
            </Box>
        </Box>
    );
    
    

}
export default Login