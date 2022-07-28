import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css'
import logo from '../Login/Educa logo.png'
import { MdMail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [show, setShow] = useState(false)
    const[userEmail, setUserEmail] = useState()
    const[userSenha, setUserSenha] = useState()

    
    function logarUsuario(e){
        e.preventDefault()
        setUserEmail(email)
        setUserSenha(senha)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return(
        <div className="login">

            <div className="login-right">
            <img src={logo} alt="Logo Educa" />
                <h1>Acessar App</h1>

                <div className="login-loginInputEmail">
                <MdMail/>
                    <input
                        type='email'
                        placeholder="Digite um email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock/>
                    <input
                        type={show ? 'text' : 'password'} //operador ternário
                        placeholder='Digite uma senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>
                </div>

                <button type="submit" onClick={logarUsuario}>
                    Entrar
                </button>

                <h4>Não tem cadastro?</h4>
                <Link to='/cadastrar'>
                    <button>Cadastrar</button>
                </Link>
                
            </div>

            {userEmail && userSenha && (
                    <div>
                        <p>O e-mail inserido foi {userEmail}, a senha foi {userSenha}</p>
                    </div>
                )}
            
        </div>
    )
}

export default Login;
