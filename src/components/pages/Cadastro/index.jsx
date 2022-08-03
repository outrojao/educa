import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css'
import { MdMail, MdLock, MdPermIdentity } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaAgain, setSenhaAgain] = useState('')
    const [name, setName] = useState('')
    const [showAgain, setShowAgain] = useState(false)
    const [show, setShow] = useState(false)
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userSenha, setUserSenha] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if( userName && userEmail && userSenha ){
            navigate('/')
        }
    })

    
    function cadastrarUsuario(e){
        e.preventDefault()
        if(!name || !email || !senha || !senhaAgain){
            alert('Por favor cheque se os campos estão preenchidos')
        } else if (senhaAgain !== senha){
            alert('Por favor cheque se as senhas foram digitadas corretamente')
        }
        else{
            setUserName(name)
            setUserEmail(email)
            setUserSenha(senha)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    const handleSenhaAgainClick = (e) => {
        e.preventDefault()
        setShowAgain(!showAgain);
    }

    return(
        <div className={styles.cadastro}>

            <div className={styles.cadastro_container}>
                <label htmlFor="name">Digite seu nome</label>
                <div className={styles.cadastro_cadastroInputName}>
                <MdPermIdentity/>
                    <input 
                        type="text"
                        placeholder="Nome e Sobrenome"
                        value={name} 
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />

                </div>

                <label htmlFor="email">Digite um email</label>
                <div className={styles.cadastro_cadastroInputEmail}>
                <MdMail/>
                    <input
                        type='email'
                        placeholder="email@email.com"
                        value={email}
                        name='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <label htmlFor="password">Digite uma senha</label>
                <div className={styles.cadastro_cadastroInputPassword}>
                    <MdLock/>
                    <input
                        type={show ? 'text' : 'password'} //operador ternário
                        placeholder='senha123'
                        value={senha}
                        name='password'
                        onChange={e => setSenha(e.target.value)}
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

                <button type="submit" onClick={cadastrarUsuario}>
                    Cadastrar
                </button>

                <h4>Já tem conta?</h4>
                <Link to='/'>
                    Logar
                </Link>
                
            </div>
            
        </div>
    )
}

export default Cadastro;