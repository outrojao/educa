import React from 'react';
import styles from './Tarefa.module.css'
const Tarefa = ({id, titulo, completed}) => {
    return ( 
        <li className={styles.tarefa} key={id}>{titulo}</li>
     );
}
 
export default Tarefa;