
import SideNav from './components/SideNav'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Content from './components/MainContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Grid container sx={{ overflow: 'hidden'}}>
      <Grid item>
        <Item sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width:{xs:'12vw',sm:'7vw', md:'7vw',lg:'15vw'}
        }}><SideNav/></Item>
      </Grid>
      <Grid item>
      <Item sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: {xs:'88vw',sm:'93vw', md:'93vw',lg:'85vw'},      
          height: '100vh',
        }}><Content /></Item>
      </Grid>
    </Grid>
  )
}

export default App
