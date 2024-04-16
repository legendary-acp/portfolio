import { Box, Avatar } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { GitHub, InsertDriveFile, LinkedIn } from '@mui/icons-material';


function Introduction(){
    return (
        <div style={{ height: '84vh', padding:'5rem 8rem' , background:'#d1dbe4', color:'#000'}}>
            <Box component="section" sx={{ fontSize: '5rem' }}> Hi, I am Pradyuman</Box>
            <Box sx={{ fontSize: '3rem', display:'flex' ,flexWrap: 'wrap', flexFlow:'row'  }}>
                Proficient in{'\u00A0'}
                <Typewriter 
                    options={{
                        strings: ['Observability','Golang','Python', 'Cloud'],
                        autoStart: true,
                        loop: true,
                      }}
                />
            </Box>
            <Box sx={{ fontSize:'1.5rem', padding:'2rem 0rem'}}>
             A skilled Software Engineer excelling in Observability and infrastructure optimization, with expertise in Golang, Python and Kubernetes. 
                Demonstrated leadership in pivotal projects like OpenTelemetry implementation and successful migrations. honed skills at Middleware, 
                enhancing Kubernetes monitoring agent architecture and integrating novel deployment strategies.
            </Box>
            <Box sx={{ fontSize: '3rem', display:'flex' ,flexWrap: 'wrap', flexFlow:'row' }}>
                <a href='https://www.linkedin.com/in/ppradyu/' target='_blank'><Avatar sx={{margin:'0.5rem', background:'#0077B5'}}> <LinkedIn/> </Avatar></a>
                <a href='https://github.com/legendary-acp/' target='_blank'><Avatar  sx={{margin:'0.5rem', background: '#000'}}> <GitHub/> </Avatar> </a>
                <a href='Resume.pdf' target='_blank'><Avatar  sx={{margin:'0.5rem', background: '#008080'}}> <InsertDriveFile/> </Avatar> </a>
            </Box>
        </div>
    )
}

export default Introduction