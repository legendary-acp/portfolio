import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function DetailsRight(prop) {
  return (
    <div style={{ display:'flex', justifyContent:'right' }}>
      <Details year={prop.year} institute={prop.institute} description={prop.description}/>
    </div>
  )
}
export function DetailsLeft(prop) {
  return (
    <div style={{ display:'flex', justifyContent:'left' }}>
      <Details year={prop.year} institute={prop.institute} description={prop.description}/>
    </div>
  )
}

function Details(prop) {
  return (
    <Card sx={{ maxWidth: 400}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prop.institute}
          </Typography>
          <Typography variant="body1" color={'#3d4c5e'}>
            {prop.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
