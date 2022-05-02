import React from 'react';
import console from '../../assets/console.png'
import { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
                    <form action="login-form">
                        <span className='login-form-title'>Bem Vindo!</span>
                        <span className='login-form-title'>
                            <img src={console} alt='NSG' />
                        </span>

                        <div className='wrap-input'>
                            <input 
                            className={email !== "" ? 'has-val input' : 'input'} 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>

                        <div className='wrap-input'>
                            <input 
                            className={password !== "" ? 'has-val input' : 'input'} 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Password'></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" >Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Nao possui conta?</span>

                            <a className="txt2" href="/">Criar conta.</a>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;