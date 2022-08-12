import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../../../services/api'
import AddTarefa from './AddTarefa';
import styles from './ListaTarefas.module.css'
import Tarefa from './Tarefa';
const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([])
    const [handlingTarefa, setHandlingTarefa] = useState([])
    const [deletarTarefa, setDeletarTarefa] = useState([])

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [handlingTarefa])

    function deleteTarefa(){
        api.delete('/tarefas', deletarTarefa)
        .then(() => {
            console.log(tarefas)
        })
        .catch((error) => console.log(error.response.data))
    }

    return (    
        <div className={styles.lista_tasks}>
            
            <AddTarefa setHandlingTarefa={setHandlingTarefa}/>

            <ul>
                {tarefas.length > 0 ? tarefas.map((tarefa) => (
                    <Tarefa key={tarefa.id} titulo={tarefa.titulo} completed={tarefa.completed}/>
                )) : (
                    <p>Você não tem tarefas</p>
                )}
            </ul>

        </div>
     );
}
 
export default ListaTarefas;