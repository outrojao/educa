import React from 'react';
import styles from './Perfil.module.css'
import Header from '../../layout/Header';
import { useParams } from 'react-router-dom';

const Perfil = () => {

    const { name } = useParams()

    return ( 
        <>
            <Header nomeUsuario={name}/>
            <div className={styles.perfil}>
                <main>
                    <section>
                
                        <input type="file" name="" id="" accept='Image/*'/>
                        <h1>{name}</h1>
                        <p>Mude seu perfil a vontade</p>
                    </section>
                </main>
            </div>
        </>
     );
}
 
export default Perfil;