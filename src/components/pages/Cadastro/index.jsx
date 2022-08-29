import React, { useState } from "react";
import { api } from '../../../services/api'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css'
import { MdMail, MdLock, MdPermIdentity } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Cadastro() {
    
    const [senhaAgain, setSenhaAgain] = useState('')
    
    const [showAgain, setShowAgain] = useState(false)
    const [show, setShow] = useState(false)

    const [user, setUser] = useState([])

    const navigate = useNavigate()

    function cadastrarUsuario(usuario) {
        api.post('/usuarios', usuario)
        .then(() => {
            navigate('/')
        }).catch((error) => console.log(error.response.data))
    }

    function submit(e) {
        e.preventDefault()
        if(!verificarUsuario()){
            alert('Verifique se os campos estão preenchidos corretamente')
            console.log(verificarUsuario())
        } else {
            cadastrarUsuario(user)
        }
    }

    function verificarUsuario(){
        if(!user.name || !user.email || !user.senha || !senhaAgain){
            return false
        } else if(user.senha !== senhaAgain){
            return false
        }
        else{
            return true
        }
    }

    function onChangeInput(e) {
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    const handleSenhaAgainClick = (e) => {
        e.preventDefault()
        setShowAgain(!showAgain);
    }

    //e => setEmail(e.target.value)

    return(
        <form onSubmit={submit} className={styles.cadastro}>

            <div className={styles.cadastro_container}>
                <label htmlFor="name">Digite seu nome</label>
                <div className={styles.cadastro_cadastroInputName}>
                <MdPermIdentity/>
                    <input 
                        type="text"
                        placeholder="Nome e Sobrenome"
                        value={user.name ? user.name : ''} 
                        name='name'
                        onChange={onChangeInput}
                    />

                </div>

                <label htmlFor="email">Digite um email</label>
                <div className={styles.cadastro_cadastroInputEmail}>
                <MdMail/>
                    <input
                        type='email'
                        placeholder="email@email.com"
                        value={user.email ? user.email : ''}
                        name='email'
                        onChange={onChangeInput}
                    />
                </div>

                <label htmlFor="password">Digite uma senha</label>
                <div className={styles.cadastro_cadastroInputPassword}>
                    <MdLock/>
                    <input
                        type={show ? 'text' : 'password'} //operador ternário
                        placeholder='senha123'
                        value={user.senha ? user.senha : ''}
                        name='senha'
                        onChange={onChangeInput}
                    />
                    <div className={styles.cadastro_eye}>
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

                <label htmlFor="curso">Selecione seu curso</label>
                <div>
                    <select name="curso" onChange={onChangeInput}>
                        <option value="DS">Desenvolvimento de Sistemas</option>
                        <option value="MA">Administração</option>
                        <option value="MN">Nutrição</option>
                    </select>
                </div>

                <h4>Digite a senha novamente</h4>
                <div className={styles.cadastro_cadastroInputPassword}>
                    <MdLock/>
                    <input
                        type={showAgain ? 'text' : 'password'} //operador ternário
                        placeholder='Ambas as senhas precisam ser iguais'
                        value={senhaAgain}
                        onChange={e => setSenhaAgain(e.target.value)}
                    />
                    <div className={styles.cadastro_eye}>
                        {showAgain ? (
                            <HiEye
                                size={20}
                                onClick={handleSenhaAgainClick}
                            />
                        ) : (
                            <HiEyeOff
                                size={20}
                                onClick={handleSenhaAgainClick}
                            />
                        )}
                    </div>
                </div>

                <button>
                    Cadastrar
                </button>

                <h4>Já tem conta?</h4>
                <Link to='/'>
                    Logar
                </Link>
                
            </div>
            
        </form>
    )
}

export default Cadastro;