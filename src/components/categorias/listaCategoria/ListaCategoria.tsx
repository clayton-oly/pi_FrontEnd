import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, Container, CardMedia, makeStyles } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './ListaCategoria.css';
import { UserState } from '../../../store/tokens/userReducer';

function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  let navigate = useNavigate();
  
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")
    }
  }, [token])

  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategoria()
  }, [categorias.length])

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
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
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
      {
        
<main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Gêneros
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Cadastrar novo gênero
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {categorias.map((categoria) => (
              <Grid item key={categoria.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <img src={produto.foto} /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {categoria.genero}
                    </Typography>
                    <Typography>
                    {categoria.descricao}
                    </Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          Atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>






          // <Grid container className='cardGrid' xs={12}>
            
         

          //   <Grid container spacing={4} xs={12}>
          //     <Grid item xs={12} sm={6} md={4}>
          //       <Card className='card' >
          //         <CardContent>
          //           <Typography color="textSecondary" gutterBottom>
          //             {categoria.genero}
          //           </Typography>
          //           <Typography variant="h5" component="h2">
          //             {categoria.descricao}
          //           </Typography>
          //         </CardContent>

          //         <CardActions>

                    
          //             <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                        
          //                 <Button variant="contained" className="marginLeft" size='small' color="primary" >
          //                   atualizar
          //                 </Button>
                        
          //             </Link>

          //             <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
          //                 <Button variant="contained" size='small' color="secondary">
          //                   deletar
          //                 </Button>
          //             </Link>
                   
          //         </CardActions>
          //       </Card>
          //     </Grid>

          //   </Grid>


          // </Grid>

        
      }
    </>
  );
}


export default ListaCategoria;