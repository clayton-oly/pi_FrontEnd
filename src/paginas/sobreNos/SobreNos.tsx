import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
                <div className='tituloIntegrantes'>
                         <h2>Integrantes</h2>
                    </div>
                    <Box className='fotosIntegrantes1'>
                        <div className='links-devs'>
                            <Box className="alef"> </Box>
                            <Typography className='nomes'><h3>Alef Oliveira</h3></Typography>
                            <Box className='redes'>
                                    <a href= "https://github.com/AlefSilvaa?tab=overview&from=2022-02-01&to=2022-02-22" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1' />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2' />
                                    </a>
                                </Box>
                            
                        </div>
                        <div className='links-devs'>
                            <Box className="alexandre">
                            </Box>
                            <Typography className='nomes'><h3>Alexandre Lima</h3></Typography>
                            <Box className='redes'>
                                    <a href= "https://github.com/AlexandrePauloLima" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1' />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/alexandre-paulo-de-lima-193321129/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2' />
                                    </a>
                                </Box>
                        </div>
                        <div className='links-devs'>
                            <Box className="beatriz">
                            </Box>
                            <Typography className='nomes'><h3>Beatriz Locatelli</h3></Typography>
                            <Box className='redes'>
                                    <a href= "https://github.com/bialocatelli" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1' />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/beatriz-gon%C3%A7alves-locatelli-b01759209/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2'  />
                                    </a>
                                </Box>
                                
                        </div>
                        <div className='links-devs'>
                            <Box className="clayton">
                            </Box>
                            <Typography className='nomes'><h3>Clayton Rocha</h3></Typography>
                            <Box className='redes' >
                                    <a href= "https://github.com/clayton-oly" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1'  />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/clayton-oly/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2'  />
                                    </a>
                                </Box>
                        </div>
                    </Box>
                    <Box className='fotosIntegrantes2'>
                        <div className='links-devs'>
                            <Box className="jessica">
                            </Box>
                            <Typography className='nomes'><h3>Jessica Santos</h3></Typography>
                            <Box className='redes'>
                                    <a href= "https://github.com/jeskamoraes" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1'/>
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/jessicamoraessantos/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2' />
                                    </a>
                                </Box>
                        </div>
                        <div className='links-devs'>
                            <Box className="victor">
                            </Box>
                            <Typography className='nomes'><h3>Victor Silva</h3></Typography>
                            <Box className='redes' >
                                    <a href= "https://github.com/vxtxbryan" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1'  />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/victor-oliveira-275836231/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2'  />
                                    </a>
                                </Box>
                        </div>
                        <div className='links-devs'>
                            <Box className="viviane">
                            </Box>
                            <Typography className='nomes'><h3>Viviane Rêgo</h3></Typography>
                            <Box className='redes' >
                                    <a href= "https://github.com/Viviane110199" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='redes1' />
                                    </a>
                            
                                    <a href="https://www.linkedin.com/in/viviane-da-rocha-rego/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon className='redes2' />
                                    </a>
                                </Box>
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
                                <Button className='botao' type="submit" variant="contained" color="primary">
                               
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