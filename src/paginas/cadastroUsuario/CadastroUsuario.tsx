import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

<<<<<<< HEAD
    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
=======
    let history = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
<<<<<<< HEAD
    });
=======
    })
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
<<<<<<< HEAD
    });

    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login");
        }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
=======
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
>>>>>>> adbc6c9620344807f70f068363aeab827e892809
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
<<<<<<< HEAD
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

=======
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuario cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                //Pode modificar a msg de acordo com o erro 
                toast.error('Erro ao cadastrar o Usuário.', {
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

        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }

    /*  Operadores utilizados 
        = : Atribuição (valor = 9)         - Atribui um valor a uma variavel/constante
        == : Op. Aritmetico (valor == 9.0) - Verifica se os valores são iguais
        === : Op. Idêntico (valor === 9.0) - Verifica se os valores e tipos são iguais
    */

>>>>>>> adbc6c9620344807f70f068363aeab827e892809
    return (
        <>
            <Grid className='background-cadastro' container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
<<<<<<< HEAD
                        <form onSubmit={cadastrar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>
                                Cadastrar
                            </Typography>
=======

                        <form onSubmit={cadastrar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

                            <TextField
                                value={user.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
<<<<<<< HEAD
                                id='nome' label='Nome' variant='outlined'
                                name='nome' margin='normal' fullWidth
                                placeholder='Insira seu nome'
                                required
                            />
=======
                                id='nome' label='nome' variant='outlined'
                                name='nome' margin='normal' fullWidth
                                placeholder='Insira seu nome'
                                required />
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

                            <TextField
                                value={user.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
<<<<<<< HEAD
                                id='foto' label='Foto' variant='outlined'
                                name='foto' margin='normal' fullWidth
                                placeholder='Insira um link de foto'
                                required
                            />
=======
                                id='foto' label='foto' variant='outlined'
                                name='foto' margin='normal' fullWidth
                                placeholder='Insira um link de foto'
                                required />
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

                            <TextField
                                value={user.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
<<<<<<< HEAD
                                id='usuario' label='E-mail' variant='outlined'
                                name='usuario' margin='normal' fullWidth
                                placeholder='Insira um e-mail válido'
                                required
                            />
=======
                                id='usuario' label='usuario' variant='outlined'
                                name='usuario' margin='normal' fullWidth
                                placeholder='Insira um email válido'
                                required />
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

                            <TextField
                                value={user.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
<<<<<<< HEAD
                                id='senha' label='Senha' variant='outlined'
                                name='senha' margin='normal' type='password' fullWidth
                                placeholder='Insira no mínimo 8 caracteres'
                                required
                            />
=======
                                id='senha' label='senha' variant='outlined'
                                name='senha' margin='normal' type='password' fullWidth
                                placeholder='Insira no mínimo 8 caracteres'
                                required />
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

                            <TextField
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
<<<<<<< HEAD
                                id='confirmarSenha' label='Confirmar Senha' variant='outlined'
                                name='confirmarSenha' margin='normal' type='password' fullWidth
                                placeholder='Insira novamente a senha'
                                required
                            />
=======
                                id='confirmarSenha' label='confirmarSenha' variant='outlined'
                                name='confirmarSenha' margin='normal' type='password' fullWidth
                                placeholder='Insira novamente a senha'
                                required />
>>>>>>> adbc6c9620344807f70f068363aeab827e892809

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
<<<<<<< HEAD
=======

>>>>>>> adbc6c9620344807f70f068363aeab827e892809
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

<<<<<<< HEAD
export default CadastroUsuario;
=======
export default CadastroUsuario;
>>>>>>> adbc6c9620344807f70f068363aeab827e892809
