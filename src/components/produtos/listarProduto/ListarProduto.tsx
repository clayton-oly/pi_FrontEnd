import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListarProduto.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListarProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            alert("VocÃª precisa estar logado")
            navigate("/login")
        }
    }, [token])


    async function getProduto() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getProduto()
    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produtos => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produto
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.nome}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.descricao}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.preco}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.tipo}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.classInd}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.console}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.foto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.categoria?.genero}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListarProduto;