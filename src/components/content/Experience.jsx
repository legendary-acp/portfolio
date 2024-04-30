import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, {timelineContentClasses} from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box, Grid, colors } from '@mui/material';
import { Item } from '../shared/Item';
import CompanyLogo from '../shared/CompanyLogo';
import Header from '../shared/Header';

function ExperienceYears(){
    return(
        <div style={{ padding:'3rem 2rem 3rem 5rem', width:'50vw', color:'#FFF', background:'#020202', boxShadow:" -1px 1px #77aaff -2px 2px #77aaff -3px 3px #77aaff -4px 4px #77aaff -5px 5px #77aaff" }}>
            <div style={{ fontSize:'5rem', margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>LETS</div>
            <div style={{ fontSize:'6rem', textAlign:'right',  margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>GET IN</div>
            <div style={{ fontSize:'7rem', margin:'1rem 0rem', textShadow: '2px 2px 4px rgba(225,225,225,5)'}}>TOUCH</div>
        </div>
    )
}
function ExperienceTimeline(){
    const gapLogo = 'gapLogo.png'
    const middlewareLogo = 'middlewareLogo.png'
    const ctrlbLogo = 'ctrlbLogo.jpg'
    return(
        <div style={{margin:'0rem 5rem'}}>
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body"
                color="text.secondary"
                >
                June 2021 - Sept 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{backgroundColor:'white', border:'0.1rem solid #000'}}>
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
                variant="body2"
                color="text.secondary"
                >
                Sept 2023 - Feb 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{backgroundColor:'white', border:'0.1rem solid #f05c5c'}}>
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
                    variant="body2"
                    color="text.secondary"
                >
                April 2024 - Present 
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outline">
                <CompanyLogo src={ctrlbLogo}/>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    CtrlB
                </Typography>
                <Typography>Sr Software Engineer</Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </div>
    )
}
export default function Experience({sectionRef}){
    return (
        <div ref={sectionRef} style={{ height: '100vh' }}>
            <Header title='Experience'/>
            <Box sx={{ flexGrow:1, height:'90vh'}}>
                <Grid container>
                    <Grid xs={6}>
                        <Item > <ExperienceYears /> </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item > <ExperienceTimeline /> </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}