import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardContent, Button, Typography, makeStyles, Grid, Container, Divider } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListarProduto.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/userReducer';
import { toast } from 'react-toastify';


function ListarProduto() {

  let navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produto[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate("/login")
    }
  }, [token])


  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getProduto()
  }, [produtos.length])

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

  const classes = useStyles();

  return (
    <>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Todos os jogos
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to='/formularioProduto' className='text-decorator-none'>
                    <Button variant="outlined" color="primary" className='btnRoxo'>
                      Cadastrar jogo
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {produtos.map((produto) => (
              <Grid item key={produto.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <img src={produto.foto} alt="imagem do jogo" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {produto.nome}
                    </Typography>
                    <Box className='btnComprar-Preco'>
                    <Typography>
                      R${produto.preco}
                    </Typography>
                    </Box>
                    
                  </CardContent>
                  <Box className='box-botoes-produto' mb={1.5} >
                    <Box className='box-botao-comprar'>
                    <Link to={`/cart/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="btnAzul" size='small' color="primary" >
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                    </Box>
                    <Divider />
                    <Box className='box-botoes-admin'>
                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft btnRoxo" size='small' color="primary" >
                          Atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' className='btnRosa'>
                          Deletar
                        </Button>
                      </Box>
                    </Link>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default ListarProduto;