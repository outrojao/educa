import React from 'react';
import styles from './AddTarefa.module.css'
const AddTarefa = () => {
    return ( 
        <header className={styles.add_task_header}>
                <input type="text" name="task" id="task" />
                <button>Adicionar tarefa</button>
        </header>
     );
}
 
export default AddTarefa;