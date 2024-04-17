import { Grid, Avatar } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function LetsGetInTouch(){
    return(
        <div>
            <div style={{ fontSize:'13rem', margin:'1rem 0rem'}}>LETS</div>
            <div style={{ fontSize:'12rem', textAlign:'right',  margin:'1rem 0rem'}}>GET IN</div>
            <div style={{ fontSize:'11rem', margin:'1rem 0rem'}}>TOUCH</div>
        </div>
    )
}
function ContactLinks(){
    return(
        <div>
            <a href='https://www.linkedin.com/in/ppradyu/' target='_blank' style={{ margin:'5rem 0rem', display:'flex', alignItems:'center', textDecoration:'none', color:'#fff', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#000', color:'#0077B5'}}> 
                    <LinkedIn fontSize='large'/> 
                </Avatar> 
                Pradyuman
            </a>
            <a href='https://github.com/legendary-acp' target='_blank' style={{ margin:'5rem 0rem', display:'flex', alignItems:'center', textDecoration:'none', color:'#fff', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#000', color:'#FFF'}}> 
                    <GitHub fontSize='large'/> 
                </Avatar> 
                legendary-acp
            </a>
            <a href='mailto:meetupradyuman@gmail.com' target='_blank' style={{ margin:'5rem 0rem', display:'flex', alignItems:'center', textDecoration:'none', color:'#fff', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#000', color:'#FFF'}}> 
                    <Email fontSize='large'/> 
                </Avatar> 
                meetupradyuman@gmail.com
            </a>
        </div>
    )
}
function Contact(){
    return (
        <div style={{ height: '100vh', background:'#000', color:'#FFF'}}>
            <Grid container>
                <Grid xs={8} sx={{ padding:'8rem 5rem'}}>
                    <LetsGetInTouch />
                </Grid>
                <Grid xs={4} sx={{ padding:'18rem 5rem 0rem 0rem' }}>
                    <ContactLinks />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact