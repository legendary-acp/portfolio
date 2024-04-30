import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const CompanyLogo = ({ src, name}) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>
        <Avatar
          alt={name}
          src={src}
          sx={{ width: {sm:'2vw',xs:'2vw', md:'2vw',lg:'3vw'}, height: {sm:'2vw',xs:'2vw', md:'2vw',lg:'3vw'}}}
        />
      </Box>
    );
  };


export default CompanyLogo;