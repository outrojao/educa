import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api';
import Header from '../../layout/Header';
import styles from './Home.module.css'
import ListaTarefas from './ListaTarefas';
const Home = () => {

    const { name } = useParams()
    const [noticias, setNoticias] = useState([])
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        api.get('/noticias')
        .then((response) => setNoticias(response.data))
    }, [usuario])

    useEffect(() => {
        api.get(`/usuarios?name=${name}`)
        .then((response) => setUsuario(response.data[0]))
    }, [name])
    
    console.log(noticias)

    return ( 
        <>
        <Header nomeUsuario={name} />
        <div className={styles.home}>
            <main className={styles.home_layout}>
                <section className={styles.noticias}>
                    <ul>
                        {
                            noticias.map((noticia) => {
                                if(noticia.curso === usuario.curso){
                                return <li className={styles.container_noticia} key={noticia.id}>
                                        <div className={styles.noticia}>
                                            <h1>{noticia.titulo}</h1>
                                            <p>{noticia.descricao}</p>
                                        </div>
                                    </li>
                                }
                            })
                        }
                    </ul>
                </section>
                <section className={styles.usuario_home}>
                    <h1>Olá, {name}</h1>
                    <ListaTarefas/>
                </section>
            </main>
        </div>
        </> 
    );
}
 
export default Home;