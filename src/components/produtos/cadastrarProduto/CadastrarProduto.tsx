import React, { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Box, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import User from '../../../models/User';
import { UserState } from '../../../store/user/userReducer';


function CadastraProduto() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    // Pega o ID guardado no Store
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [user, setUser] = useState<User>({
        id: +userId,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            genero: '',
            descricao: '',
        })

    const [produto, setProduto] = useState<Produto>({

        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        tipo: '',
        classInd: '',
        console: '',
        foto: '',
        dataProduto: '',
        categoria: null,
        usuario: null
    })



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


    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
            usuario: user
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) { 
            console.log(produto)
            try {
                await put(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto atualizado com sucesso', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao atualizar, verifique os campos', {
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
        } else {
            try {
                await post(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto cadastrado com sucesso', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao atualizar, verifique os campos', {
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
        back()

    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Grid container className="container-produto">
            <Grid className='container-cad-produto'>
                <Box className='container-cad-produto-text'>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastro de produto</Typography>
                </Box>
                <Box className='container-cad-produto-form'>
                    <form onSubmit={onSubmit}>

                        <Box className='produto-form-box'>
                        <Box className='wrap-input'>
                            <input value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" placeholder="Nome" name="nome" />
                        </Box>
                        <Box className='wrap-input'>
                            <input value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" placeholder="Descrição do produto" name="descricao" />
                        </Box>
                        </Box>

                        <Box className='produto-form-box'>
                        <Box className='wrap-input'>
                            <input value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" name="preco" />
                        </Box>

                        <Box className='wrap-input'>
                            <input value={produto.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="tipo" placeholder="Mídia fisica ou Mídia digital" name="tipo" />
                        </Box>

                        <Box className='wrap-input'>
                            <input value={produto.classInd} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="classInd" placeholder="Classificação indicativa" name="classInd" />
                        </Box>
                        </Box>

                        <Box className='produto-form-box'>
                        <Box className='wrap-input'>
                            <input value={produto.console} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="console" placeholder="Console" name="console" />
                        </Box>

                        <Box className='wrap-input'>
                            <input value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" placeholder="Foto" name="foto" />
                        </Box>
                        </Box>

                        <FormControl className='form-control-text'>
                            <InputLabel className='form-control-text' id="demo-simple-select-helper-label">Gênero</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                    headers: {
                                        'Authorization': token
                                    }
                                })}>
                                {
                                    categorias.map(categoria => (
                                        <MenuItem value={categoria.id}>{categoria.genero}</MenuItem>
                                    ))
                                }
                            </Select>
                            <FormHelperText className='form-control-text' >Escolha um gênero para o jogo</FormHelperText>
                            <Button className='btnFinalizar' type="submit" variant="contained" color="primary">
                                Finalizar
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}
export default CadastraProduto;