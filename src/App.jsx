
import SideNav from './components/SideNav'
import Grid from '@mui/material/Grid';
import MainContent from './components/MainContent';
import {Item} from './components/shared/Item'

function App() {
  return (
    <Grid container>
      <Grid>
        <Item sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width:{xs:'12vw',sm:'7vw', md:'7vw',lg:'15vw'}
        }}><SideNav/></Item>
      </Grid>
      <Grid>
      <Item sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: {xs:'88vw',sm:'93vw', md:'93vw',lg:'85vw'},      
          height: '100vh',
        }}><MainContent /></Item>
      </Grid>
    </Grid>
  )
}

export default App
