import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from '../components/Header';
import Plans from '../components/Plans';
import netflixavatar from "../images/netflixavatar.jpg";

const Profile = () => {

    const styles = {
        profile: {

        },
        info: {

        },
        details: {

        },
        plans: {

        },
        netflixAvatar:{
            width: "100px", 
        height: "100px", 
        }
    };

    return (
        <Box sx={styles.profile}>
            <Header />
            <Typography variant='h3'>Edit Profile</Typography>
            <Box sx={styles.info}>
                <Box component="img" src={netflixavatar} alt="avatar" sx={styles.netflixAvatar} />
                <Box sx={styles.details}>
                    <Box sx={styles.plans}>
                        <Typography vaiant= "h6">email usuario</Typography>
                        <Typography vaiant= "h5" gutterBottom>Plans</Typography>
                        <Plans cost={7.99}>Netflix Standard</Plans>
                        <Plans cost={11.99}>Netflix Basic</Plans>
                        <Plans cost={15.99}>Netflix Standard</Plans>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Profile;
