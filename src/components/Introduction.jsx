import { Box, Paper } from '@mui/material';

function Introduction(){
    return (
        <div style={{ height: '97vh', padding:'1rem 1.5rem' }}>
            <Box elevation={2} sx={{ height:'5vh'}} >
                <h1>Hi, my name is Pradyuman</h1>
            </Box>
            <h2>Something here</h2>
            <Box sx={{ height:'10vh'}}>
            <h2> As a SDE at CtrlB, I engineer and maintain product integrations for various database systems, using cloud infrastructure and Git. I have a passion for solving real-world problems with innovative and reliable solutions.</h2>
            </Box>
        </div>
    )
}

export default Introduction