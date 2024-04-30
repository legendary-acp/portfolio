import RoundImage  from './shared/RoundImage';

import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SideNav({ menuItems }) {
  const profilePhotoURL = "profile.jpg"
  
  const handleClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor:'#FFF', height:'100vh', color:'#000'}}>
      <RoundImage src={profilePhotoURL}/>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ }}> 
            <ListItemButton sx={{
              '&:hover': {
                backgroundColor: '#d1dbe4',
              },
            }} onClick={() => handleClick(item.section)}>
              <ListItemIcon sx={{fontSize: '1.8rem', display: 'flex', justifyContent: { md: 'center', lg: 'flex-start' } }}> 
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ fontSize: '1rem', display: { sm:'none', xs:'none', md: 'none', lg: 'block' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideNav;
