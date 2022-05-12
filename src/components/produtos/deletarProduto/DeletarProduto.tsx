import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../service/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './DeletarProduto.css';
import { UserState } from '../../../store/user/userReducer';

function DeletaProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [produto, setProdutos] = useState<Produto>()
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProdutos, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            navigate('/produtos')
            deleteId(`/produtos/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Produto deletado com sucesso', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: 'colored',
              progress: undefined,
          });
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
                                 {produto?.nome}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
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
export default DeletaProduto;