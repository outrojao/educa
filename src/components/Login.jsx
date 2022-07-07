import styles from '../styles/Login.module.css'
import { useState } from 'react';

function Login(){
    const fotoPessoa = 'https://via.placeholder.com/150';

    const[nome, setNome] = useState("")
    const[senha, setSenha] = useState("")

    

    function checarUsuario(){
        if(nome === 'João' && senha === 123){
            alert('Login efetuado com sucesso')
        }
    }

    return(
        <div>
            <form className={styles.formContainer}>
                <p>Foto:</p>
                <img src={fotoPessoa} alt="" srcset="" />
                <input type="image" src="" alt="" />
                <input type="file" name="" id="" />
                <p>Nome:</p>
                <input type="text" name="" id="" onChange={ e => setNome( e.target.value ) }/>
                <p>Senha:</p>
                <input type="number" name="" id="" onChange={ e => setSenha( e.target.valueAsNumber )}/>
                <input type="button" value="Logar" onClick={checarUsuario}/>
            </form>
        </div>
        
    )
}

export default Login;