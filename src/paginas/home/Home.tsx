import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './Home.css';
import { UserState } from '../../store/user/userReducer';
import { Box, Grid, Typography } from '@material-ui/core';

function Home() {

  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
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

  return (
    <>
      <Grid container className='container-home'>
        <Grid className='carousel' xs={12}>
          <Box className='item'>
            <Box className='image'></Box>
            <Box className='info'>
              <Typography variant='h3'>Kena: Bridge of Spirits</Typography>
              <Typography variant='h5'>Uma aventura de ação com uma companhia
                mecânica única, combate e exploração.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid className='view-produtos' xs={12}>
          <Typography variant='h3'>Cards com produtos em destaque</Typography>
        </Grid>
      </Grid>


    </>
  );
}

export default Home;