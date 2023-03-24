import { Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import Header from '../components/Header';
import Plans from '../components/Plans';
import netflixavatar from "../images/netflixavatar.jpg";
import { NetflixButton } from '../styled/styledcomponents';

const Profile = () => {
    const theme = useTheme();

    const styles = {
        profile: {
            color: "#fff",
            minHeight: "100vh",
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        info: {
            width: "80%",
            display: "flex",
            "& img": {
                height: "100px",
            }
        },
        netflixAvatar: {
            width: "100px",
            height: "100px",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        plans: {
            width: "100%",

        },
        details: {
            width: "100%",
            marginLeft: theme.spacing(3),
            "& h6": {
                backgroundColor: "#aaa",
                padding: theme.spacing(1),
                marginBottom: theme.spacing(1),
                fontSize: "18px",
            }
        },
        plansText: {
            borderBottom: "1px solid lightgray"
        }
    };

    return (
        <>
            <Box>
                <Header />
            </Box>
            <Box sx={styles.profile}>
                <Typography variant='h3'>Edit Profile</Typography>
                <Box sx={styles.info}>
                    <Box component="img" src={netflixavatar} alt="avatar" sx={styles.netflixAvatar} />
                    <Box sx={styles.details}>
                        <Box sx={styles.plans}>
                            <Typography variant="h6">email usuario</Typography>
                            <Typography sx={styles.plansText} variant="h5" gutterBottom>Plans</Typography>
                            <Plans cost={7.99}>Netflix Standard</Plans>
                            <Plans cost={11.99}>Netflix Basic</Plans>
                            <Plans color="gray" cost={15.99}>Netflix Premium</Plans>
                            <NetflixButton>Sing Out</NetflixButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>

    )
};

export default Profile;
