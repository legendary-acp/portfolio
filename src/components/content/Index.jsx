import { Box } from '@mui/material';
import Introduction from './Introduction';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function Main({ menuItems }){
    return (
    <Box sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Introduction sectionRef={menuItems[0].section}/>
        <Experience sectionRef={menuItems[1].section}/>
        <Education sectionRef={menuItems[4].section}/>
        <Contact sectionRef={menuItems[5].section}/>
    </Box>)
}

export default Main