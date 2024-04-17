import { Box, Paper } from '@mui/material';
import Introduction from './Introduction';
import Contact from './Contact';

function Content(){
    return (
    <Box sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Introduction id="about"/>
        <Contact id="contact"/>
    </Box>)
}

export default Content