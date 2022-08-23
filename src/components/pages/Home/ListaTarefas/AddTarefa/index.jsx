import React from 'react';
import { useState } from 'react';
import { api } from '../../../../../services/api'
import styles from './AddTarefa.module.css'
const AddTarefa = ({setHandlingTarefa}) => {

    const [novaTarefa, setNovaTarefa] = useState([])

    function onChangeInput(e) {
        setNovaTarefa({
                        titulo: e.target.value,
                        completed: false
                     })
    }

    function addTarefa(){
        if(novaTarefa.length === 0){
            alert('Insira um nome para a tarefa')
        } else {
            api.post('/tarefas', novaTarefa)
            .then(() => {
            setHandlingTarefa(novaTarefa)
            setNovaTarefa('')
            })
            .catch((error) => console.log(error.response.data))
        }
    }

    return ( 
            <header className={styles.add_task_header}>
                    <input type="text" onChange={onChangeInput}/>
                    <button onClick={addTarefa}>Adicionar</button>
            </header>
     );
}
 
export default AddTarefa;