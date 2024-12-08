import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, Container, createStyles, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Slider from 'react-slick';  // Importando o Slider do React Slick
import './Home.css';
import Produto from '../../models/Produto';
import { UserState } from '../../store/tokens/userReducer';
import { busca } from '../../services/Service';
import { Theme } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Estilos
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: 'black', 
    boxShadow: '0 2px 3px 2px rgb(0, 0, 0)',
    background: 'white',
    padding: '20px 20px',
    border: 10,
    borderRadius: 10,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Home() {
  let navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const token = useSelector<UserState, UserState["tokens"]>(state => state.tokens);

  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        'Authorization': token
      }
    });
  }

  useEffect(() => {
    getProduto();
  }, [produtos.length]);

  // Configuração do Slider
  const sliderSettings = {
    dots: true,  // Exibe os pontos para navegação
    infinite: true,  // Ciclo infinito
    speed: 500,  // Tempo de transição entre imagens
    slidesToShow: 1,  // Quantas imagens aparecerão de cada vez
    slidesToScroll: 1,  // Quantas imagens irão para a próxima ao clicar na seta
  };

  const classes = useStyles();

  return (
    <>
      <Grid container className='container-home'>
        <Grid id='items-wrapper'>
          <Box id='items'>
            {/* Carrossel de imagens */}
            <Slider {...sliderSettings}>
              <figure className='item'>
                <img src='https://image.api.playstation.com/vulcan/ap/rnd/202008/2619/aEqpsWKWYe1dxn9zKs7HgLai.jpg' className='imagem_banner' alt='foto' />
                <figcaption>
                  <Typography variant="h4" color="inherit">
                    Kena Bridge of Spirits
                  </Typography>
                  <Typography variant="body1" color="inherit">
                    Kena: Bridge of Spirits é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Ember Lab. A história segue Kena, uma jovem guia espiritual que usa suas habilidades mágicas para ajudar pessoas falecidas a passar do mundo físico para o espiritual.
                  </Typography>
                </figcaption>
              </figure>

              <figure className='item'>
                <img src='https://meups.com.br/wp-content/uploads/2019/02/Horizon-Zero-Dawn.jpg' className='imagem_banner' alt='foto' />
                <figcaption>
                  <Typography variant="h4" color="inherit">
                    Horizon Forbidden West
                  </Typography>
                  <Typography variant="body1" color="inherit">
                    Junte-se a Aloy para encarar o Oeste Proibido, um território que esconde novas ameaças misteriosas.
                  </Typography>
                </figcaption>
              </figure>

              <figure className='item'>
                <img src='https://t.ctcdn.com.br/l3FfZefGePASotb6gaQ9dstkjaU=/1400x788/smart/filters:format(webp)/i451008.jpeg' className='imagem_banner' alt='foto' />
                <figcaption>
                  <Typography variant="h4" color="inherit">
                    DEATHLOOP
                  </Typography>
                  <Typography variant="body1" color="inherit">
                    Em DEATHLOOP, dois assassinos rivais estão presos em uma misteriosa distorção temporal na ilha de Blackreef, condenados a repetir o mesmo dia por toda a eternidade.
                  </Typography>
                </figcaption>
              </figure>
            </Slider>
          </Box>
        </Grid>
      </Grid>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {produtos.map((produto) => (
            <Grid item key={produto.id} xs={12} sm={4} md={3}>
              <Card className={classes.card}>
                <img src={produto.foto} alt="imagem do jogo" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {produto.nome}
                  </Typography>
                  <Typography>
                    R${produto.preco}
                  </Typography>
                </CardContent>
                <Box display="flex" mb={1.5}>
                  <Link to={`/cart/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnAzul" size='small' color="primary">
                        Comprar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
