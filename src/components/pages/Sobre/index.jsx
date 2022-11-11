import React from 'react';
import styles from './Sobre.module.css'
import logo from '../../../imagens/Educa logo.png'
import joaoRocha from '../../../imagens/joao-tcc.jpeg'
import eduardoLepore from '../../../imagens/eduardo-tcc.jpeg'

const Sobre = () => {
    return (
         <main className={styles.sobre}>
            <section className={styles.o_que_e}>
                <div className={styles.content}>
                        <h1>O que é o Educa?</h1>
                        <p>O Educa é uma ferramenta de auxílio a jornada estudantil dos educandos desenvolvida por alunos do 3°ano do curso de Desenvolvimento de Sistemas da Etec de Hortolândia. Com o Educa o aluno pode sanar suas dúvidas escolares e focar nas suas dificuldades para que assim possa superá-las visando o seu progresso e evolução.</p>
                        <p>O Educa nada mais que é uma ferramenta escolar feita por alunos para alunos.</p>
                        <div className={styles.fotos_alunos}>
                            <div>
                                <figure><img src={eduardoLepore} alt="Eduardo Lepore" /></figure>
                                <figcaption>Eduardo Alan Lepore Bento</figcaption>
                            </div>
                            <div>
                                <figure><img src={joaoRocha} alt="João Rocha" /></figure>
                                <figcaption>João Victor dos Santos Rocha</figcaption>
                            </div>
                        </div>
                </div>
            </section>
            <section className={styles.motivo}>
                <div className={styles.content}>
                    <h1>Por que ele foi desenvolvido?</h1>
                    <p>O projeto foi criado com o intuito de desenvolver um hábito de estudo no usuário a fim de ajudar o mesmo com a sua vida acadêmica, por muitas vezes os alunos se sentem desmotivados com a escola seja por quaisquer motivos, desde emocionais como a preocupação com o seu futuro escolar a sociais como preocupação com o seu próprio desempenho na escola com medo de criticas e etc.</p>
                    <p>Dessa forma os educandos tendem a ficar desanimados em relação a seus estudos e acabam por evitar cada vez mais ter uma interação com o mesmo, criando assim uma "bola de neve" de conteúdos mau assimilados que prejudicam e desanimam cada vez mais o aluno, sendo assim o Educa vem como um ferramenta de possível solução para o problema.</p>
                    <img src={logo} alt="Educa logo" />
                </div>
            </section>
            <section className={styles.objetivo}>
                <div className={styles.content}>
                    <h1>Qual o objetivo do projeto?</h1>
                    <p>O objetivo é criar um ambiente de aprendizagem que preza pelo entendimento e evolução do aluno, com o mesmo tendo acesso a conteúdos como vídeos, sites e etc. Além de motivar o aluno a sempre continuar seus estudos e parabenizá-lo por suas conquistas e bons resultados afim de criar no educando o hábito de estudar.</p>
                    <p>O projeto tem como objetivo final a criação de uma plataforma de estudos aos quais os alunos possam identificar suas dificuldades, resolvê-las e evoluir constantemente tendo controle da sua agenda de tarefas curriculares.</p>
                </div>
            </section>
         </main>
    );
}
 
export default Sobre;