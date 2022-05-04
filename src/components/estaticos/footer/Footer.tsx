import React from 'react';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="mailto:nsg.generation@gmail.com" target="_blank" rel="noopener noreferrer">
                            <AttachEmailIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://github.com/NSG-The-Next-Step-Game" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box className='box2' >
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a className='text-decorator-none' target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    );
}

export default Footer;