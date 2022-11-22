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
                                <li><a href="https://www.kumon.com.br/blog/vamos-juntos-educar/interpretacao-de-texto/">Interpretação de texto</a></li>
                                <li><a href="https://www.todamateria.com.br/exercicios-de-concordancia-nominal/">Concordância Nominal</a></li>
                                <li><a href="https://www.educamaisbrasil.com.br/enem/lingua-portuguesa/generos-textuais">Genêros Textuais</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.matematica}>
                        <details>
                            <summary>Matemática</summary>
                            <ul>
                                <li><a href="https://www.educamaisbrasil.com.br/enem/matematica/funcao-de-primeiro-grau">Funções de 1º grau</a></li>
                                <li><a href="https://www.educamaisbrasil.com.br/enem/matematica/funcao-de-segundo-grau">Funções de 2º grau</a></li>
                                <li><a href="https://www.todamateria.com.br/trigonometria/">Trigonometria</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.geografia}>
                        <details>
                            <summary>Geografia</summary>
                            <ul>
                                <li><a href="https://www.todamateria.com.br/principais-problemas-ambientais/">Questões Ambientais</a></li>
                                <li><a href="https://brasilescola.uol.com.br/brasil/urbanizacao.htm#:~:text=Urbanização%20é%20o%20crescimento%20das,é%20chamada%20de%20êxodo%20rural.">Urbanização</a></li>
                                <li><a href="https://brasilescola.uol.com.br/geografia/globalizacao.htm">Globalização</a></li>
                            </ul>
                        </details>
                    </section>

                    <section className={styles.historia}>
                        <details>
                            <summary>História</summary>
                            <ul>
                                <li><a href="https://brasilescola.uol.com.br/o-que-e/historia/o-que-e-era-vargas.htm">Era Vargas</a></li>
                                <li><a href="https://www.todamateria.com.br/ditadura-militar-no-brasil/">Ditadura Militar</a></li>
                                <li><a href="https://www.politize.com.br/nazifascismo/">Nazifascismo</a></li>
                            </ul>
                        </details>
                    </section>
                </div>
            </main>
        </div>
    );
}
 
export default Materiais;