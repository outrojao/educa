import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api'
import styles from './Login.module.css'
import logo from '../../../imagens/Educa logo.png'
import { MdMail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {

    const [show, setShow] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userSenha, setUserSenha] = useState('')

    const [user, setUser] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        api.get(`/usuarios?email=${userEmail}`)
        .then((response) => setUser(response.data[0]))
        .catch((error) => console.log(error.response.data))
    }, [userEmail])


    function verificarDados(){
       if(user.email === userEmail && user.senha === userSenha){
            return true
       } else {
            return false
       }
    }

    function logarUsuario(e) {
        e.preventDefault()
        if(!verificarCampos()){
            alert('Verifique se os campos estão preenchidos corretamente')
            console.log(verificarCampos())
        } else {
            if(verificarDados()){
                navigate(`/home/${user.name}`)
            } else {
                alert('Não foi possível achar nenhum login correspondente')
            }
        }
    }

    function verificarCampos(){
        if(!userEmail || !userSenha){
            return false
        } else {
            return true
        }
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return(
        <form onSubmit={logarUsuario} className={styles.login}>

            <div className={styles.login_container}>
            <img src={logo} alt="Logo Educa" />
                <h1>Acessar App</h1>

                <div className={styles.login_loginInputEmail}>
                <MdMail/>
                    <input
                        type='email'
                        placeholder="Digite seu email"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                </div>

                <div className={styles.login_loginInputPassword}>
                    <MdLock/>
                    <input
                        type={show ? 'text' : 'password'} //operador ternário
                        placeholder='Digite sua senha'
                        value={userSenha}
                        onChange={e => setUserSenha(e.target.value)}
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

                <button>
                    Entrar
                </button>

                <h4>Não tem cadastro?</h4>
                <Link to='/cadastrar'>
                    Cadastrar
                </Link>
                
            </div>
            
        </form>
    )
}

export default Login;