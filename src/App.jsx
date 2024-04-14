
import ResponsiveDrawer from './components/ResponsiveDrawer'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Content from './components/Content';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Grid container spacing={1} style={{ width: '100vw', height: '100vh' }}>
      <Grid item xs={1.5}>
        <Item><ResponsiveDrawer injectFirst/></Item>
      </Grid>
      <Grid item xs={10.5}>
      <Item><Content /></Item>
      </Grid>
    </Grid>
  )
}

export default App
