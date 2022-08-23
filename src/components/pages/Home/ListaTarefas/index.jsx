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
    // const [deletedTarefa, setDeletedTarefa] = useState()

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [handlingTarefa])

    // useEffect(() => {
    //     api.delete('/tarefas/1')
    //     .then(() => console.log('apagou'))
    //     .then(() => setHandlingTarefa('bruh'))
    //     .catch((err) => console.log(err))
    //     }, [deletedTarefa])

    // function deletarTarefa(idTarefa){
    //     if(!idTarefa) return
    //     else{
    //         const updateTarefa = tarefas.filter((tarefa) => tarefa.id !== idTarefa)
    //         api.delete(`/tarefas/${idTarefa}`)
    //         .then(() => console.log('apagou'))
    //         .catch((err) => console.log(err))
    //         setHandlingTarefa('bruh')
    //     }
    // }

    return (    
        <div className={styles.lista_tasks}>
            
            <AddTarefa setHandlingTarefa={setHandlingTarefa}/>

            <ul>
                {tarefas.length > 0 ? tarefas.map((tarefa) => (
                    <Tarefa key={tarefa.id} id={tarefa.id} titulo={tarefa.titulo} completed={tarefa.completed} setHandlingTarefa={setHandlingTarefa}/>
                )) : (
                    <p>Você não tem tarefas</p>
                )}
            </ul>

        </div>
     );
}
 
export default ListaTarefas;