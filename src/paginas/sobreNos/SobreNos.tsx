import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/estaticos/navbar/Navbar';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
        <Navbar />

        <Grid className="container">
            <Box className="box11">
            <Typography variant='h1' gutterBottom color='textPrimary' component='h1' align='center' className='texto'>Sobre a NSG</Typography>
            </Box>
            <Box className="box22">
            <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='texto'>Integrantes</Typography>
            </Box>
            <Box className="box33">
                <form className='form'>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Entre em contato conosco:</Typography>
                    
                    <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth placeholder='Insira seu nome' required />
                    <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth placeholder='Insira um email válido' required />
                    <TextField id='mensagem' label='mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth placeholder='Escreva uma mensagem para nós' required />
                    <Box marginTop={2} textAlign='center'>
                        <Link className='text-decorator-none' to='/login'>
                            <Button className="botao" type='submit' variant='contained' color='secondary'>
                                Enviar
                            </Button>
                        </Link>
                    </Box>
                </form>
            </Box>
        </Grid>

        </>
    );
}


export default SobreNos;