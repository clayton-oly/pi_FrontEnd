import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid, Link } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';



function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='footer-infos'>
                        <Box paddingTop={1} className='footer-infos-links'>
                           <Typography gutterBottom className='footer-text-principal'>Navegação</Typography>
                            <Typography gutterBottom className='footer-text'>Dúvidas e informações</Typography>
                            <Typography gutterBottom className='footer-text'>Desenvolvedores</Typography>
                        </Box>

                        <Box paddingTop={1} className='footer-infos-contato'>
                            <Typography gutterBottom className='footer-text-principal'>Contato</Typography>
                            <Typography gutterBottom className='footer-text'>nsg@gmail.com</Typography>
                            <Typography gutterBottom className='footer-text'>Caixa postal  000, São Paulo - SP | 00000-000</Typography>
                        </Box>

                        <Box className='footer-infos-redes'>
                            <Typography gutterBottom className='footer-text-principal'>Redes sociais</Typography>
                            <Box className='footer-infos-redes-icons'>
                                <a href="https://github.com/NSG-The-Next-Step-Game" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='footer-infos-redes-icons' />
                                </a>
                                <a href="https://github.com/NSG-The-Next-Step-Game" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon className='footer-infos-redes-icons' />
                                </a>
                                <a href="https://github.com/NSG-The-Next-Step-Game" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon className='footer-infos-redes-icons' />
                                </a>

                            </Box>

                        </Box>
                    </Box>

                    <Box className='footer-copyright' >
                        <Box paddingTop={1}>
                            <Typography className='footer-copyright-text' >COPYRIGHT NEXT STEP GAME - 2022. TODOS OS DIREITOS RESERVADOS.</Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    );
}

export default Footer;