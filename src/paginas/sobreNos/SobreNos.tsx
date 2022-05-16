import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Navbar from '../../components/estaticos/navbar/Navbar';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
        <Navbar />

        <Grid className="container">
            <Box className="box11">
            <Typography variant='h1' gutterBottom color='textPrimary' component='h1' align='center' className='textoTitulo'>Sobre a NSG</Typography>
            <Typography className='texto'>A The Next Step Game é uma empresa desenvolvida por sete jovens que buscam renovar a qualidade do meio ambiente através de um e-commerce, nosso foco é reutilizar e eliminar quaisquer mídia física que venha afetar nosso ecossistema. Através da nossa plataforma digital, os usuários têm a opção de comprar e vender  jogos tangíveis para diversos tipos de consoles, cada usuário que realocar uma mídia física vai receber um desconto proporcional para que o mesmo seja incentivado a tal ação. Além de beneficiar o meio ambiente a NSG junto aos seus desenvolvedores, vai destinar o lucro para realização de eventos para crianças e jovens carentes, onde damos a possibilidade de conhecerem um pouco mais sobre o mundo digital, disponibilizando diversão e conhecimento.</Typography>
            </Box>
            <Box className="box22">
            <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='textoTitulo'>Integrantes</Typography>
            <Typography></Typography>
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