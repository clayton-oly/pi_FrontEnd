import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CarouselC from '../../components/carousel/Carousel';

import './Home.css';

function Home() {

  return (
    <>
      <Grid container className='container-home'>
        
        <Grid id='items-wrapper'>
          <Box id='items'>

            <figure className='item'>
              <img src='https://image.api.playstation.com/vulcan/ap/rnd/202008/2619/aEqpsWKWYe1dxn9zKs7HgLai.jpg' />
              <figcaption>
                <h2>Kena Bridge of Spirits</h2>
                <p>Kena: Bridge of Spirits é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Ember Lab. A história segue Kena, uma jovem guia espiritual que usa suas habilidades mágicas para ajudar pessoas falecidas a passar do mundo físico para o espiritual.</p>
              </figcaption>
            </figure>

            <figure className='item'>
              <img src='https://meups.com.br/wp-content/uploads/2019/02/Horizon-Zero-Dawn.jpg' />
              <figcaption>
                <h2>Horizon Forbidden West</h2>
                <p>Junte-se a Aloy para encarar o Oeste Proibido, um território que esconde novas ameaças misteriosas.</p>
              </figcaption>
            </figure>

            <figure className='item'>
              <img src='https://t.ctcdn.com.br/l3FfZefGePASotb6gaQ9dstkjaU=/1400x788/smart/filters:format(webp)/i451008.jpeg' />
              <figcaption>
                <h2>DEATHLOOP</h2>
                <p> Em DEATHLOOP, dois assassinos rivais estão presos em uma misteriosa distorção temporal na ilha de Blackreef, condenados a repetir o mesmo dia por toda a eternidade. No papel de Colt, a única chance de escapar é fechar o ciclo assassinando oito alvos essenciais antes que o dia reinicie.</p>
              </figcaption>
            </figure>
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