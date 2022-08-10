import React from 'react';
import styles from './AddTarefa.module.css'
const AddTarefa = ({setNovaTarefa, handleAddTarefa}) => {

    function onChangeInput(e) {
        e.preventDefault()
        setNovaTarefa({
                        titulo: e.target.value,
                        completed: false
                     })
    }

    return ( 
            <header className={styles.add_task_header}>
                    <input type="text" onChange={onChangeInput}/>
                    <button onClick={handleAddTarefa}>Adicionar</button>
            </header>
     );
}
 
export default AddTarefa;