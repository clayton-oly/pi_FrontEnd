import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../service/Service';
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
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" name="preco" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="tipo" label="tipo" name="tipo" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.classInd} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="classInd" label="classInd" name="classInd" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.console} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="console" label="console" name="console" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
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
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastraProduto;