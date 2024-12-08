import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './CadastroCategoria.css';
import { Button, TextField, Typography } from '@mui/material';
import { UserState } from '../../../store/tokens/userReducer';
import { Grid, Box } from '@material-ui/core';

function CadastroCategoria() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(state => state.tokens);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        genero: '',
        descricao: '',
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            history("/login");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    async function findById(id: string) {
        setLoading(true);
        try {
            await buscaId(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token,
                }
            });
        } catch (error) {
            toast.error('Erro ao buscar categoria', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
        } finally {
            setLoading(false);
        }
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!categoria.genero || !categoria.descricao) {
            toast.error('Todos os campos são obrigatórios!', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            return;
        }

        setLoading(true);
        try {
            if (id !== undefined) {
                await put(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token,
                    }
                });
                toast.success('Gênero atualizado com sucesso', {
                    position: 'top-right',
                    autoClose: 2000,
                    theme: 'colored',
                });
            } else {
                await post(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token,
                    }
                });
                toast.success('Gênero cadastrado com sucesso', {
                    position: 'top-right',
                    autoClose: 2000,
                    theme: 'colored',
                });
            }
            back();
        } catch (error) {
            toast.error('Erro ao salvar, tente novamente', {
                position: 'top-right',
                autoClose: 2000,
                theme: 'colored',
            });
        } finally {
            setLoading(false);
        }
    }

    function back() {
        history('/categorias');
    }

    return (
        <Grid container className="container-cad-categoria">
            <Grid className='container-cad-categoria-form'>
                <Box className='box-cad-categoria-text'>
                    <Typography variant="h4" color="textSecondary" component="h1" align="center">
                        Cadastro para gênero de jogos
                    </Typography>
                </Box>
                <Box className='box-cad-categoria-form'>
                    <form onSubmit={onSubmit}>
                        <TextField
                            value={categoria.genero}
                            onChange={updatedCategoria}
                            id="genero"
                            label="Gênero"
                            variant="outlined"
                            name="genero"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                            value={categoria.descricao}
                            onChange={updatedCategoria}
                            id="descricao"
                            label="Descrição"
                            variant="outlined"
                            name="descricao"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <Button
                            className='btnFinalizar'
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            {loading ? 'Carregando...' : 'Finalizar'}
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroCategoria;
