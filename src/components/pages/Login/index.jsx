import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import logo from '../../../imagens/Educa logo.png'
import { MdMail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [show, setShow] = useState(false)
    const[userEmail, setUserEmail] = useState('')
    const[userSenha, setUserSenha] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if( userEmail && userSenha ){
            navigate('/home')
        }
    })

    
    function logarUsuario(e){
        e.preventDefault()
        if(!email || !senha){
            alert('Por favor cheque se os campos estão preenchidos')
        }
        setUserEmail(email)
        setUserSenha(senha)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return(
        <div className={styles.login}>

            <div className={styles.login_container}>
            <img src={logo} alt="Logo Educa" />
                <h1>Acessar App</h1>

                <div className={styles.login_loginInputEmail}>
                <MdMail/>
                    <input
                        type='email'
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.login_loginInputPassword}>
                    <MdLock/>
                    <input
                        type={show ? 'text' : 'password'} //operador ternário
                        placeholder='Digite sua senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <div className={styles.login_eye}>
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
                    Cadastrar
                </Link>
                
            </div>
            
        </div>
    )
}

export default Login;