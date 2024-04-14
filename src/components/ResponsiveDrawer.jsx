import RoundImage from './RoundImage';
import '../main.css'

import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


//Icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';


function ResponsiveDrawer() {
  const menuItems = [
    { name: 'About', icon: <PersonOutlineIcon /> },
    { name: 'Experience', icon: <TrendingUpIcon /> },
    { name: 'Projects', icon: <FolderCopyIcon /> },
    { name: 'Skills', icon: <BuildIcon /> },
    { name: 'Education', icon: <SchoolIcon /> },
    { name: 'Contact', icon: <MailIcon /> },
  ];

  const profilePhotoURL = "src/assets/profile.jpg"

  return (
    <>
      <RoundImage src={profilePhotoURL}/>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, display: 'flex', alignItems: 'center' }}> {/* Adjust font size conditionally */}
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}> {/* Adjust icon size conditionally */}
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ display: { xs: 'none', md: 'block' } }} /> {/* Hide text on small screens */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ResponsiveDrawer;
