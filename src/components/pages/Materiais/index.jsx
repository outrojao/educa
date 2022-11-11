import React from 'react';
import styles from './Materiais.module.css'
const Materiais = () => {
    return (
        <div className={styles.materiais}>
            <main>
                <header className={styles.titulo}>
                    <h1>Aqui você irá encontrar todos os materiais necessários para sanar suas dúvidas!</h1>
                </header>
                <div className={styles.conteudos}>

                    <section className={styles.portugues}>
                        <details>
                            <summary>Português</summary>
                            <ul>
                                <li><a href="">Interpretação de texto</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.matematica}>
                        <details>
                            <summary>Matemática</summary>
                            <ul>
                                <li><a href="">Interpretação de texto</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.geografia}>
                        <details>
                            <summary>Geografia</summary>
                            <ul>
                                <li><a href="">Interpretação de texto</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.historia}>
                        <details>
                            <summary>História</summary>
                            <ul>
                                <li><a href="">Interpretação de texto</a></li>
                            </ul>
                        </details>
                    </section>
                </div>
            </main>
        </div>
    );
}
 
export default Materiais;