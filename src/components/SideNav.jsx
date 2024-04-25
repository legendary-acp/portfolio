import RoundImage from './RoundImage';

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


function SideNav() {
  const menuItems = [
    { name: 'About', icon: <PersonOutlineIcon />, section:'#about' },
    { name: 'Experience', icon: <TrendingUpIcon />, section:'#experience' },
    { name: 'Projects', icon: <FolderCopyIcon />, section:'#projects' },
    { name: 'Skills', icon: <BuildIcon />, section:'#skills' },
    { name: 'Education', icon: <SchoolIcon />, section:'#education' },
    { name: 'Contact', icon: <MailIcon />, section:'#contact' },
  ];

  const profilePhotoURL = "profile.jpg"
  let scrollToSection = function (section){
    const element= document.querySelector(section)
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }
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
            }} onClick={scrollToSection(item.section)}>
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
