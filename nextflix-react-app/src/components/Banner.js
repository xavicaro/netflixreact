import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HeroBanner from '../images/netflix.jpg';

const Banner = () => {

  const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  const styles = {
    bannerStyle: {
      backgroundImage: `url(${HeroBanner})`,
      position: 'relative',
      height: '40vw',
      width: '100vw',
      objectFit: 'contain',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    },
    contentStyle: {
      color: '#fff',
    },
    buttonStyle: {
      cursor: 'pointer',
      color: '#fff',
      fontWeight: 700,
      borderRadius: '5px',
      marginRight: '1rem',
      backgroundColor: 'rgba(51, 51, 51, 0.5)',
      '&:hover': {
        color: '#000',
        backgroundColor: '#e6e6e6',
      },
    },
    descriptionStyle: {
      wordWrap: "break-word",
    },
    fadeStyle: {
      position: "absolute",
      top: "50%",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage:
        "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
    }
  };

  return (
    <Box sx={styles.bannerStyle}>
      <Box sx={styles.contentStyle}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
        <Button sx={styles.buttonStyle}>Play</Button>
        <Button sx={styles.buttonStyle}>My List</Button>
        <Typography variant="h6" sx={styles.descriptionStyle}>
          {truncate('Movie description', 160)}
        </Typography>
        <Box sx={styles.fadeStyle}></Box>
      </Box>
    </Box>
  );
};



export default Banner;
