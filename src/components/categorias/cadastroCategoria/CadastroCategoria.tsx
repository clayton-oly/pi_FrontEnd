import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import './CadastroCategoria.css';
import { Button, TextField, Typography } from '@mui/material';
import { UserState } from '../../../store/user/userReducer';
import { Grid, Box } from '@material-ui/core';

function CadastroCategoria() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        genero: '',
        descricao: '',
    })

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
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categorias " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        history('/categorias')

    }
    return (
        <Grid container className="container-cad-categoria">
           <Grid className='container-cad-categoria-form'>
               <Box className='box-cad-categoria-text'>
               <Typography variant="h4" color="textSecondary" component="h1" align="center" >Cadastro para gênero de jogos</Typography>
               </Box>
               <Box className='box-cad-categoria-form'>
               <form onSubmit={onSubmit}>
                    <TextField value={categoria.genero} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="genero" label="Gênero" variant="outlined" name="genero" margin="normal" fullWidth />
                    <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Button className='btnFinalizar' type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
               </Box>
           </Grid>
        </Grid>
    )
}

export default CadastroCategoria;