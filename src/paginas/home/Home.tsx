import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CarouselC from '../../components/carousel/Carousel';

import './Home.css';

function Home() {

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
          <Grid container className='grid-home'>
            <CarouselC/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;