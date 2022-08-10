import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../../../services/api'
import AddTarefa from './AddTarefa';
import styles from './ListaTarefas.module.css'
import Tarefa from './Tarefa';
const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState([])
    const [deletarTarefa, setDeletarTarefa] = useState([])

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [tarefas])


    function addTarefa(){
        api.post('/tarefas', novaTarefa)
        .then(() => {
            console.log(tarefas)
            setNovaTarefa('')
        })
        .catch((error) => console.log(error.response.data))
    }

    function deleteTarefa(){
        api.delete('/tarefas', deletarTarefa)
        .then(() => {
            console.log(tarefas)
        })
        .catch((error) => console.log(error.response.data))
    }

    return (    
        <div className={styles.lista_tasks}>
            
            <AddTarefa setNovaTarefa={setNovaTarefa} handleAddTarefa={addTarefa}/>

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