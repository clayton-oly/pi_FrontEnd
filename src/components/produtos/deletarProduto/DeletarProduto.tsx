import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './deletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../service/Service';

function DeletarProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [produto, setProduto] = useState<Produto>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/produtos')
        deleteId(`/produto/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Tema deletado com sucesso');
    }

    function nao() {
        navigate('/produtos')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Produto:
                            </Typography>
                            <Typography color="textSecondary">
                                Produto
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarProduto;