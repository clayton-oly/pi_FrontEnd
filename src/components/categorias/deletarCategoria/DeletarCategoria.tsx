import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/tokens/userReducer';
import "./DeletarCategoria.css";

function DeletarCategoria() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria>();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
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
            history("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history('/categorias')

        try {
            await deleteId(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            
            toast.success('Gênero deletado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            
        } catch (error) {
            toast.error('Erro ao deletar.', {
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

    }

    function nao() {
        history('/categorias')
    }

    return (
        <>
            <Box m={2} className='box-deletar-categoria'>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography gutterBottom className='text-deletar'>
                                Deseja deletar o Gênero:
                            </Typography>
                            <Typography className='text-deletar'>
                                { categoria?.genero }
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft btnRoxo" size='large' color="secondary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' className='btnPreto'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarCategoria;