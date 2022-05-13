import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import console from '../../assets/console.png';
import { useDispatch } from 'react-redux';
import { addId, addToken } from "../../store/user/actions";
import { toast } from 'react-toastify';
import './Login.css'

function Login() {

    // Redireciona o usuário para determinada pagina
    let history = useNavigate()

    const dispatch = useDispatch();

    // Hooks que vão manipular o nosso Local Storage para gravar o Token
    const [token, setToken] = useState('');

    // useState define como uma determinada variavel será inicializada quando o Comp. for renderizado
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    // Crie mais um State para pegar os dados retornados a API
    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: '',
        foto: ""
    })

     // Hook de efeito colateral, sempre executa uma função quando o que estiver no seu Array é alterado
     useEffect(() => {
        if (respUserLogin.token !== "") {

            // Verifica os dados pelo console (Opcional)
            //console.log("Token: " + respUserLogin.token)
           // console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history('/home')
        }
    }, [respUserLogin.token])


    // Função que junto com a setUserLogin irá atualizar o valor inicial da userLogin
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
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
            toast.error('Dados de login inconsistentes. Erro ao logar!', {
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
    }

    return (
        <Grid className='container'>
            <Box className='container-login'>
                <Box className='wrap-login'>
                    <form onSubmit={logar} className='login-form'>
                        <span className='login-form-title'>Bem Vindo!</span>

                        <span className='login-form-title'>
                            <img src={console} alt='NSG' />
                        </span>

                        <Box className='wrap-input'>
                            <input
                                className={userLogin.usuario !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={userLogin.usuario}
                                name='usuario'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </Box>

                        <Box className='wrap-input'>
                            <input
                                className={userLogin.senha !== "" ? "has-val input" : "input"}
                                type="password"
                                value={userLogin.senha}
                                name='senha'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            />
                            <span className='focus-input' data-placeholder='Password'></span>
                        </Box>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" >Login</button>
                        </div>

                        <Box className="text-center">
                            <span className="txt1">Nao possui conta?</span>

                            <Link to='/cadastro'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='txt2'>Cadastre-se</Typography>
                            </Link>
                        </Box>

                    </form>
                </Box>
            </Box>

        </Grid>
    );
}

export default Login;