import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Navbar from '../../components/estaticos/navbar/Navbar';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Navbar />

            <Grid container className="container-sobre">
                <Grid className='container-sobre-one'>
                    <div className='background-sobre'>
                        <div className='mask-background-sobre'></div>
                    </div>

                    <div className='container-texto-sobre'></div>

                    <div className='texto-sobre'>
                        <div className='texto-sobre-titulo'>
                            <h1>Sobre a NSG</h1>
                        </div>
                        <div className='texto-sobre-conteudo'>
                            <p>A The Next Step Game é uma empresa desenvolvida por sete jovens que buscam renovar a qualidade do meio ambiente através de um e-commerce, nosso foco é reutilizar e eliminar quaisquer mídia física que venha afetar nosso ecossistema.</p>
                            <p>Através da nossa plataforma digital, os usuários têm a opção de comprar e vender  jogos tangíveis para diversos tipos de consoles, cada usuário que realocar uma mídia física vai receber um desconto proporcional para que o mesmo seja incentivado a tal ação.</p>
                            <p>Além de beneficiar o meio ambiente a NSG junto aos seus desenvolvedores, vai destinar o lucro para realização de eventos para crianças e jovens carentes, onde damos a possibilidade de conhecerem um pouco mais sobre o mundo digital, disponibilizando diversão e conhecimento.</p>
                        </div>
                    </div>
                </Grid>

                <Grid className="container-devs">
                    <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='textoTitulo'>Integrantes</Typography>
                    <Box className='fotosIntegrantes1'>
                        <div>
                            <Box className="alef"> </Box>
                            <Typography className='nomes'>Alef Oliveira</Typography>
                        </div>
                        <div>
                            <Box className="alexandre">
                            </Box>
                            <Typography className='nomes'>Alexandre Lima</Typography>
                        </div>
                        <div>
                            <Box className="beatriz">
                            </Box>
                            <Typography className='nomes'>Beatriz Locatelli</Typography>
                        </div>
                        <div>
                            <Box className="clayton">
                            </Box>
                            <Typography className='nomes'>Clayton Rocha</Typography>
                        </div>
                    </Box>
                    <Box className='fotosIntegrantes2'>
                        <div>
                            <Box className="jessica">
                            </Box>
                            <Typography className='nomes'>Jessica Santos</Typography>
                        </div>
                        <div>
                            <Box className="victor">
                            </Box>
                            <Typography className='nomes'>Victor Silva</Typography>
                        </div>
                        <div>
                            <Box className="viviane">
                            </Box>
                            <Typography className='nomes'>Viviane Rêgo</Typography>
                        </div>
                    </Box>
                </Grid>

                <Grid className="grid-form-sobre">

                    {/* <Box className='container-left-box-sobre-form'>
                        
                    </Box> */}

                    <Box className='container-rigth-box-sobre-form'>
                        <Box className='box-sobre-form-titulo'>
                            <h1>Fale conosco</h1>
                        </Box>

                        <Box className='box-sobre-form'>
                            <form>
                                <input id='nome' name='nome' placeholder='Insira seu nome' required />
                                <input id='email' name='email' placeholder='Insira um email válido' required />
                                <input id='mensagem' name='mensagem' placeholder='Escreva sua mensagem' required />
                            </form>
                        </Box>

                        <Box marginTop={2} textAlign='center'>
                            <Link className='text-decorator-none' to='/login'>
                                <Button className="botao" type='submit' variant='contained' color='secondary'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

        </>
    );
}


export default SobreNos;