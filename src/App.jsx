
import ResponsiveDrawer from './components/ResponsiveDrawer'
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
      <Grid item xs={2}>
        <Item sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '15vw',  
        }}><ResponsiveDrawer/></Item>
      </Grid>
      <Grid item xs={10}>
      <Item sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '85vw',      
          height: '100vh',
        }}><Content /></Item>
      </Grid>
    </Grid>
  )
}

export default App
