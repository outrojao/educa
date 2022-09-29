import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../../../services/api'
import AddTarefa from './AddTarefa';
import styles from './ListaTarefas.module.css'
import Tarefa from './Tarefa';
import Mensagem from '../../../layout/Mensagem';
const ListaTarefas = ({nomeUsuario}) => {

    const [tarefas, setTarefas] = useState([])
    const [usuario, setUsuario] = useState([])
    const [handlingTarefa, setHandlingTarefa] = useState([])
    const [tarefasCompletas, setTarefasCompletas] = useState(0)
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => { //o useEffect sera executado no momento em que o elemento for renderizado
        api.get('/tarefas') //define a rota que iremos "getar" para pegar as informações, que no caso será a de tarefas
        .then((response) => {
            setTarefas(response.data)
        })
    }, [handlingTarefa])

    useEffect(() => {
        api.get(`/usuarios/?name=${nomeUsuario}`).then((response) => {
            setUsuario(response.data[0])
        }).catch(console.log)
    }, [nomeUsuario])

    useEffect(() => {
        if(tarefasCompletas === 3){
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 4000)

            api.patch(`/usuarios/${usuario.id}`, {trofeu: true}).catch(console.log)
        }
    }, [tarefasCompletas, usuario]) //nomeUsuario, usuario

    function deletarTarefa(idDaTarefa){
        api.delete(`/tarefas/${idDaTarefa}`).then(() => setHandlingTarefa('tarefa deletada')).catch(console.log)
        const updateTarefas = tarefas.filter((tarefa) => tarefa.id !== idDaTarefa)
        setTarefas(updateTarefas)
    }

    function completarTarefa(idDaTarefa) {
        api.patch(`/tarefas/${idDaTarefa}`, {completed: true}).then(() => setHandlingTarefa('tarefa completada')).catch(console.log)
        const updateTarefas = tarefas.map(tarefa => {
            if(tarefa.id === idDaTarefa) return  {...tarefa, completed: true}
            return tarefa;
          });
        setTarefas(updateTarefas)
        setTarefasCompletas(tarefasCompletas + 1)
    }

    return (
    <>
        {showMessage && <Mensagem mensagem='Parabéns, você ganhou um troféu' tipo='trofeu'/>}

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
    </>
     );
}
 
export default ListaTarefas;