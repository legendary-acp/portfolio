import { Box, Paper } from '@mui/material';
import Introduction from './Introduction';

function Content(){
    return (
    <Box sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Introduction/>
    </Box>)
}

export default Content