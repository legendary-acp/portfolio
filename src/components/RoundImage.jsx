import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery hook

const RoundImage = ({ src, size = 120, borderWidth = 5, borderColor = '#4a7194' }) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Adjust breakpoint as needed

  const adjustedBorderWidth = isSmallScreen ? 3 : borderWidth; // Adjust border width (optional)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>
      <Avatar
        alt="Round Image"
        src={src}
        sx={{ width: {sm:'5vw',xs:'5vw', md:'5vw',lg:'10vw'}, height: {sm:'5vw',xs:'5vw', md:'5vw',lg:'10vw'}, border: {sm:'3px solid #4a7194',xs:'3px solid #4a7194', md:'3px solid #4a7194',lg:'5px solid #4a7194'}  }}
      />
    </Box>
  );
};

export default RoundImage;