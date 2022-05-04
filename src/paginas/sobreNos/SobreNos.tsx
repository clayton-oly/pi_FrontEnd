import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import './SobreNos.css';

function SobreNos() {
    return (
        <Grid className="container">
            <Box className="box">
                <h1>Sobre a NSG</h1>
            </Box>
            <Box className="box">
                <h2>Integrantes</h2>
            </Box>
            <Box className="box">
                <form>
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
    );
}


export default SobreNos;