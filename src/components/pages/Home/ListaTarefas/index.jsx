import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../../../services/api'
import AddTarefa from './AddTarefa';
import styles from './ListaTarefas.module.css'
import Tarefa from './Tarefa';
const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [])

    return (    
        <div className={styles.lista_tasks}>
            
            <AddTarefa/>

            <ul>
                {tarefas && tarefas.map((tarefa) => {
                    return <Tarefa id={tarefa.id} titulo={tarefa.titulo} completed={tarefa.completed}/>
                })}
            </ul>
        </div>
     );
}
 
export default ListaTarefas;