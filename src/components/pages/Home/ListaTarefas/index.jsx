import React from 'react';
import styles from './ListaTarefas.module.css'
const ListaTarefas = () => {
    return (    
        <div className={styles.lista_tasks}>
            <header className={styles.add_task_header}>
                <input type="text" name="task" id="task" />
                <button>Adicionar tarefa</button>
            </header>
            
        </div>
     );
}
 
export default ListaTarefas;