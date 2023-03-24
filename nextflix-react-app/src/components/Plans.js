import { Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react'
import { NetflixButton} from '../styled/styledcomponents';

const Plans = ({ cost, children, color }) => {

  const theme = useTheme();

  const styles = {
    plans: {
      marginTop: theme.spacing(3),
      marginBottom:theme.spacing(3),
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      "& button":{
        marginBottom: theme.spacing(2),
      }
      
    },
    standard:{
      fontSize:"1.2rem"
    }
  };

  return (
    <Box sx={styles.plans}>
      <Typography sx={styles.standard} variant='h5'>
        {children}
      </Typography>
      <NetflixButton color={color}>Suscribe</NetflixButton>
    </Box>
  )
}

export default Plans
