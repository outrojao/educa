import styles from '../styles/Login.module.css'
import { useState } from 'react';
import Cadastro from './Cadastro';

function Login(){
    const fotoPessoa = 'https://via.placeholder.com/150';

    const[nome, setNome] = useState()
    const[senha, setSenha] = useState()
    const[userNome, setUserNome] = useState()
    const[userSenha, setUserSenha] = useState()

    

    function logarUsuario(e){
        e.preventDefault()
        setUserNome(nome)
        setUserSenha(senha)
    }

    return(
        <div>
            <form className={styles.formContainer}>
                <p>Foto:</p>
                <img src={fotoPessoa} alt="" srcset="" />
                <input type="image" src="" alt="" />
                <input type="file" name="" id="" />
                <p>Nome:</p>
                <input type="text" name="" id="" placeholder="Ex: user@email.com" onChange={ e => setNome( e.target.value ) }/>
                <p>Senha:</p>
                <input type="number" name="" id="" onChange={ e => setSenha( e.target.valueAsNumber )}/>
                <button type='submit' onClick={logarUsuario}>Logar</button>
                {userNome && userSenha (
                    <Cadastro/>
                )}
            </form>
        </div>
        
    )
}

export default Login;