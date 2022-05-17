import React from 'react';
import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import CarouselC from '../../components/carousel/Carousel';

import './Home.css';
import Produto from '../../models/Produto';

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
          <Grid className='cards'>
            <Box className='line-cards'>
            <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="primary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>
              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="primary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>
              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="primary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>
              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="primary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>
            </Box>
            <Box className='line-cards'>
            <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="secondary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>

              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="secondary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>

              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="secondary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>

              <Box className='card-item'>
              <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                  <Link href='/login' className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnComprar" size='small' color="secondary" >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </div>
                </div>
              </Box>
            </Box>
          </Grid>




















          {/* <Grid container className='grid-home'>
            <CarouselC/>
          </Grid> */}
        </Grid>


      </Grid>
    </>
  );
}

export default Home;