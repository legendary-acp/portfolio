import { Grid, Avatar, Paper } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function LetsGetInTouch(){
    return(
        <div style={{ padding:'8rem 2rem 8rem 5rem', color:'#FFF', background:'#020202', boxShadow:" -1px 1px #77aaff -2px 2px #77aaff -3px 3px #77aaff -4px 4px #77aaff -5px 5px #77aaff" }}>
            <div style={{ fontSize:'13rem', margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>LETS</div>
            <div style={{ fontSize:'12rem', textAlign:'right',  margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>GET IN</div>
            <div style={{ fontSize:'11rem', margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>TOUCH</div>
        </div>
    )
}
function ContactLinks(){
    return(
        <div style={{padding:'22rem 1rem 0rem 1rem'}}>
            <Paper elevation={'10'} sx={{ padding:'2rem' }} square={false}>
            <a href='https://www.linkedin.com/in/ppradyu/' target='_blank' style={{ display:'flex', alignItems:'center', textDecoration:'none', color:'#000', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#fff', color:'#0077B5'}}> 
                    <LinkedIn fontSize='large'/> 
                </Avatar> 
                Pradyuman
            </a>
            <a href='https://github.com/legendary-acp' target='_blank' style={{ margin:'3rem 0rem', display:'flex', alignItems:'center', textDecoration:'none', color:'#000', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#fff', color:'#000'}}> 
                    <GitHub fontSize='large'/> 
                </Avatar> 
                legendary-acp
            </a>
            <a href='mailto:meetupradyuman@gmail.com' target='_blank' style={{ display:'flex', alignItems:'center', textDecoration:'none', color:'#000', fontSize:'2rem'}}>
                <Avatar sx={{backgroundColor:'#fff', color:'#000'}}> 
                    <Email fontSize='large'/> 
                </Avatar> 
                meetupradyuman@gmail.com
            </a>
            </Paper>
        </div>
    )
}
function Contact(){
    return (
        <div style={{ height: '100vh' }}>
            <Grid container>
                <Grid xs={8}>
                    <LetsGetInTouch />
                </Grid>
                <Grid xs={4}>
                    <ContactLinks />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact