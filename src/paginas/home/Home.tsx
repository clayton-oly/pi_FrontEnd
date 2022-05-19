import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid } from '@material-ui/core';
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
          <Grid className='cards'>
            <Box className='line-cards'>
              <Box className='card-item'>
                <div className='imagem-card'>
                  <img src='https://image.api.playstation.com/pr/bam-art/135/007/c090bede-e5e2-45de-8443-17e99701ab64.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Elden Ring</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/pr/bam-art/135/103/cd9eb087-e46a-44fb-9a29-13ac3be688c6.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Ghostwire: Tokyo</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/pr/bam-art/128/259/a7b40966-3908-48a3-8e9a-d881265eca3f.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Horizon Forbidden</h4>
                  </figcaption>
                  <div>
                    <Link to="/login" className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/pr/bam-art/128/659/16517ee0-e732-41ab-893d-41e530afc129.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>DEATHLOOP</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/pr/bam-art/139/697/b3b6e071-d67d-4cb5-9c2f-12a9ee717ba0.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>Vampire: the Masquerade - Bloodhunt</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/pr/bam-art/137/013/3e0c5010-4bc2-41ed-9e8c-09329138a492.jpg?w=440&thumb=false' />
                  <figcaption>
                    <h4>STRANGER OF PARADISE FINAL FANTASY ORIGIN</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/vulcan/ap/rnd/202110/1318/zdQ4x5FDFxD4bLZfhatvPbUc.png?w=440&thumb=false' />
                  <figcaption>
                    <h4>Gotham Knights</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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
                  <img src='https://image.api.playstation.com/vulcan/ap/rnd/202202/2116/59jHCjMBRhuRhPUKUUy2gkNd.png?w=440&thumb=false' />
                  <figcaption>
                    <h4>Sniper Elite 5</h4>
                  </figcaption>
                  <div>
                    <Link to='/login' className="text-decorator-none">
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