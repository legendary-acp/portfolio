
import SideNav from './components/SideNav'
import Grid from '@mui/material/Grid';
import Main from './components/content/Index';
import {Item} from './components/shared/Item'
import { useRef } from 'react';

//Icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';

function App() {
  const menuItems = [
    { name: 'About', icon: <PersonOutlineIcon />, section: useRef(null) },
    { name: 'Experience', icon: <TrendingUpIcon />, section: useRef(null) },
    { name: 'Projects', icon: <FolderCopyIcon />, section: useRef(null) },
    { name: 'Skills', icon: <BuildIcon />, section: useRef(null) },
    { name: 'Education', icon: <SchoolIcon />, section: useRef(null) },
    { name: 'Contact', icon: <MailIcon />, section: useRef(null) },
  ];

  return (
    <Grid container>
      <Grid>
        <Item sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width:{xs:'12vw',sm:'7vw', md:'7vw',lg:'15vw'}
        }}><SideNav menuItems={menuItems}/></Item>
      </Grid>
      <Grid>
      <Item sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: {xs:'88vw',sm:'93vw', md:'93vw',lg:'85vw'},      
          height: '100vh',
        }}><Main menuItems={menuItems}/></Item>
      </Grid>
    </Grid>
  )
}

export default App
