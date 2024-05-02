import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import CompanyLogo from '../shared/CompanyLogo';
import Header from '../shared/Header';

function ExperienceYears(){
    return(
        <div style={{ height:'100%',  padding:'10rem 2rem 3rem 5rem'}}>
            <div style={{ fontSize:'4rem',  margin:'2rem 0rem' }}>More than 3 year as</div>
            <div style={{ fontSize:'4rem', margin:'2rem 0rem', fontWeight:'700', color:'#000000'}}>Software Engineer</div>
        </div>
    )
}
function ExperienceTimeline(){
    const gapLogo = 'gapLogo.png'
    const middlewareLogo = 'middlewareLogo.png'
    const ctrlbLogo = 'ctrlbLogo.jpg'
    return(
        <Timeline position="alternate-reverse" sx={{ height:'100%', paddingTop:'5rem'}}>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body"
                >
                June 2021 - Sept 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{backgroundColor:'white', border:'0.2rem solid #000'}}>
                    <CompanyLogo src={gapLogo}/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Gap Inc.
                </Typography>
                <Typography>Software Engineer</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem> 
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body"
                >
                Sept 2023 - Feb 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{backgroundColor:'white', border:'0.2rem solid #f05c5c'}}>
                <CompanyLogo src={middlewareLogo}/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '5rem', px: 2 }}>
                <Typography variant="h6" component="span">
                    Middleware
                </Typography>
                <Typography>Sr Software Engineer</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body"
                >
                April 2024 - Present 
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot sx={{backgroundColor:'white', border:'0.2rem solid #4D5BE9'}}>
                <CompanyLogo src={ctrlbLogo}/>
                </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    CtrlB
                </Typography>
                <Typography>Sr Software Engineer</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}
export default function Experience({sectionRef}){
    return (
        <div ref={sectionRef} style={{ height: '100vh' }}>
            <Header title='EXPERIENCE'/>
            <Box sx={{  height:'90vh', backgroundColor:'#ffffff'}}>
                <Grid container>
                <Grid xs={6}>
                        <ExperienceYears />
                    </Grid>
                    <Grid xs={6}>
                        <ExperienceTimeline />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}