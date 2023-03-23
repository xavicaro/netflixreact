import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HeroBanner from '../images/netflix.jpg';
import { useTheme } from '@mui/system';

const Banner = () => {
  const theme = useTheme();

  const bannerStyle = {
    backgroundImage: `url(${HeroBanner})`,
    position: 'relative',
    height: '40vw',
    width: '100vw',
    objectFit: 'contain',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  const contentStyle = {
    color: '#fff',
  };

  const buttonStyle = {
    cursor: 'pointer',
    color: '#fff',
    fontWeight: 700,
    borderRadius: '5px',
    padding: theme.spacing(1, 4, 1, 4),
    marginRight: '1rem',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    '&:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6',
    },
  };

  const descriptionStyle = {
    wordWrap: "break-word",
  };

  const fadeStyle = {
    position: "absolute",
    top: "50%",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
  };
  

  const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  return (
    <Box sx={bannerStyle}>
      <Box sx={contentStyle}>
        <Typography variant="h2" component="h1">
          Movie Title
        </Typography>
        <Button sx={buttonStyle}>Play</Button>
        <Button sx={buttonStyle}>My List</Button>
        <Typography variant="h6" sx={descriptionStyle}>
          {truncate('Movie description', 160)}
        </Typography>
        <Box sx={fadeStyle}></Box>
      </Box>
    </Box>
  );
};

export default Banner;
