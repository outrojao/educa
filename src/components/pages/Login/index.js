import React, { useState } from "react";
import './login.css'

import { MdMail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    function checarUsuario(){
        if(email === 'jvsantosrocha980@gmail.com' && senha === '12345678'){
            alert('Usuário acessou o app')
        }else{
            alert('Por favor cheque as informações')
        }
    }

    return(
        <div className="login">
            <div className="login-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="Login App" />
            </div>

            <div className="login-right">
                <h1>Acessar App</h1>

                <div className="login-loginInputEmail">
                <MdMail/>
                    <input
                        type='email'
                        placeholder='Digite um email'
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

                <button type="submit" onClick={checarUsuario}>
                    Entrar
                </button>

                <h4>Não tem cadastro?</h4>
                <button type="submit">
                    Cadastrar
                </button>

                
            </div>
            
        </div>
    )
}

export default Login;
