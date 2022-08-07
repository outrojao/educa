import React from 'react';
import {useParams} from 'react-router-dom'
import Header from '../../layout/Header';
import styles from './Home.module.css'
import ListaTarefas from './ListaTarefas';
const Home = () => {

    const { name } = useParams()

    return ( 
        <>
        <Header/>
        <div className={styles.home}>
            <main className={styles.home_layout}>
                <section className={styles.noticias}>
                    <ul>
                        <li>noticia1</li>
                        <li>noticia2</li>
                        <li>noticia3</li>
                        <li>noticia4</li>
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