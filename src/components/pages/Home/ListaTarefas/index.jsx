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
    const [tarefasCompletas, setTarefasCompletas] = useState(0)

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [handlingTarefa])

    useEffect(() => {
        if(tarefasCompletas === 3){
            alert('parabens vc ganhou um trofeu')
        }
    }, [tarefasCompletas])

    function deletarTarefa(idDaTarefa){
        api.delete(`/tarefas/${idDaTarefa}`).then(() => setHandlingTarefa('tarefa deletada')).catch(console.log)
        const updateTarefas = tarefas.filter((tarefa) => tarefa.id !== idDaTarefa)
        setTarefas(updateTarefas)
    }

    function completarTarefa(idDaTarefa) {
        setTarefasCompletas(tarefasCompletas + 1)
        let tarefaCompletada = tarefas.filter((tarefa) => tarefa.id === idDaTarefa)
        tarefaCompletada = { completed: !tarefaCompletada.completed }
        api.patch(`/tarefas/${idDaTarefa}`, tarefaCompletada).then(() => setHandlingTarefa('tarefa completa')).catch(console.log)
        //setTarefas(...tarefas, tarefaCompletada)
    }

    return (    
        <div className={styles.lista_tasks}>
            
            <AddTarefa setHandlingTarefa={setHandlingTarefa}/>

            <ul>
                {tarefas.length > 0 ? tarefas.map(({id, titulo, completed}) => (
                    <Tarefa 
                        key={id} 
                        id={id} 
                        titulo={titulo} 
                        completed={completed} 
                        excluir={() => deletarTarefa(id)} 
                        completar={() => completarTarefa(id)}
                    />
                )) : (
                    <p>Você não tem tarefas</p>
                )}
            </ul>

        </div>
     );
}
 
export default ListaTarefas;