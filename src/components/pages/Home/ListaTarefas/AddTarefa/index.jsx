import React, { useState } from 'react';
import { api } from '../../../../../services/api'
import styles from './AddTarefa.module.css'
const AddTarefa = ({setHandlingTarefa}) => {

    const [novaTarefa, setNovaTarefa] = useState([])
    const [valorInput, setValorInput] = useState('')

    function onChangeInput(e) {
        setNovaTarefa({
                        titulo: e.target.value,
                        completed: false
                     })
        setValorInput(e.target.value)
    }

    function addTarefa(){
        if(valorInput === ''){
            alert('Insira um nome para a tarefa')
        } else {
            api.post('/tarefas', novaTarefa)
            .then(() => {
            setHandlingTarefa(novaTarefa)
            setNovaTarefa('')
            setValorInput('')
            })
            .catch((error) => console.log(error.response.data))
        }
    }

    return ( 
            <header className={styles.add_task_header}>
                    <input type="text" value={valorInput} onChange={onChangeInput}/>
                    <button onClick={addTarefa}>Adicionar</button>
            </header>
     );
}
 
export default AddTarefa;