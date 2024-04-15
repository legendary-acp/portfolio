import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery hook

const RoundImage = ({ src, size = 120, borderWidth = 5, borderColor = 'grey' }) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Adjust breakpoint as needed

  const adjustedSize = isSmallScreen ? 50 : size; // Adjust size for small screens
  const adjustedBorderWidth = isSmallScreen ? 3 : borderWidth; // Adjust border width (optional)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: isSmallScreen ? 1 : 2 }}>
      <Avatar
        alt="Round Image"
        src={src}
        sx={{ width: adjustedSize, height: adjustedSize, border: `${adjustedBorderWidth}px solid ${borderColor}` }}
      />
    </Box>
  );
};

export default RoundImage;