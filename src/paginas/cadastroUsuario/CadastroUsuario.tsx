import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login");
        }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        // Validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.usuario)) {
            toast.error('Insira um e-mail válido!', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            return;
        }

        // Validação de senha
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                // Tentativa de cadastro
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                });
            } catch (error: any) {
                // Erro no cadastro
                const errorMessage = error.response?.data?.message || "Erro ao cadastrar.";
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                });
            }
        } else {
            // Senhas não coincidem ou senha muito curta
            toast.error('Dados inconsistentes. Verifique suas informações.', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            setUser({ ...user, senha: "" }); // Reinicia o campo de Senha
            setConfirmarSenha(""); // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <>
            <Grid className='background-cadastro' container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={cadastrar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>
                                Cadastrar
                            </Typography>

                            <TextField
                                value={user.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome' label='Nome' variant='outlined'
                                name='nome' margin='normal' fullWidth
                                placeholder='Insira seu nome'
                                required
                            />

                            <TextField
                                value={user.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='foto' label='Foto' variant='outlined'
                                name='foto' margin='normal' fullWidth
                                placeholder='Insira um link de foto'
                                required
                            />

                            <TextField
                                value={user.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario' label='E-mail' variant='outlined'
                                name='usuario' margin='normal' fullWidth
                                placeholder='Insira um e-mail válido'
                                required
                            />

                            <TextField
                                value={user.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha' label='Senha' variant='outlined'
                                name='senha' margin='normal' type='password' fullWidth
                                placeholder='Insira no mínimo 8 caracteres'
                                required
                            />

                            <TextField
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha' label='Confirmar Senha' variant='outlined'
                                name='confirmarSenha' margin='normal' type='password' fullWidth
                                placeholder='Insira novamente a senha'
                                required
                            />

                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default CadastroUsuario;
