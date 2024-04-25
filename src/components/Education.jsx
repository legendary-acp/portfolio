import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab'
import {School, Book, Backpack} from '@mui/icons-material';

import {DetailsLeft, DetailsRight} from './shared/Details';
import Header from './shared/Header';

export default function Education() {
  return (
    <div style={{ height:'100vh'}}>
        <Header title='Education'/>
        <div style={{padding:'8rem 10rem 0rem 0rem'}}>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <School/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><DetailsLeft institute='National Institute of Technology, Hamirpur(HP)' year='2017-21' description='B.Tech in Computer Science and Engineering'/></TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <Book/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent> <div style={{ textAlign: 'right' }}><DetailsRight institute='BL Central Public School, Solan(HP)' year='2016-17' description='12th grade with a focus on Physics, Chemistry, and Mathematics'/></div></TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot>
                    <Backpack/>
                </TimelineDot>
                </TimelineSeparator>
                <TimelineContent><DetailsLeft institute='MRADAV Sr Sec Public School' year='2014-15' description='Class 10th from CBSE board' /></TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
    </div>
  );
}