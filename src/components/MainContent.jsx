import { Box } from '@mui/material';
import Introduction from './Introduction';
import Contact from './Contact';
import Education from './Education';

function MainContent(){
    return (
    <Box sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Introduction id="about"/>
        <Education />
        <Contact id="contact"/>
    </Box>)
}

export default MainContent