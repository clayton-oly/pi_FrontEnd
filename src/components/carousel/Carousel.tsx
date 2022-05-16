import { Box, Button, Card, CardContent, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux';
import Produto from '../../models/Produto';
import { busca } from '../../services/Service';
import { UserState } from '../../store/user/userReducer';

import './Carousel.css'
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];


function CarouselC() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );


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
        <Carousel breakPoints={breakPoints} isRTL={false}>
            {    
                produtos.map(produto => (
                    <Grid item key={produto.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <img src={produto.foto} />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {produto.nome}
                                </Typography>
                                <Typography>
                                    {produto.descricao}
                                </Typography>
                            </CardContent>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link href='/login' className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            COMPRAR
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </Card>
                    </Grid>
                ))
            }
        </Carousel>
    )
}


export default CarouselC