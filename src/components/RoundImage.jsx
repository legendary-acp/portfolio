import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery hook

const RoundImage = ({ src, size = 120, borderWidth = 5, borderColor = 'grey' }) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed

  const adjustedSize = isSmallScreen ? 80 : size; // Adjust size for small screens
  const adjustedBorderWidth = isSmallScreen ? 3 : borderWidth; // Adjust border width (optional)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: isSmallScreen ? 1 : 2 }}> {/* Adjust padding for smaller screens */}
      <Avatar
        alt="Round Image"
        src={src}
        sx={{ width: adjustedSize, height: adjustedSize, border: `${adjustedBorderWidth}px solid ${borderColor}` }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
};

export default RoundImage;