import React, { useEffect, useState } from 'react';
import { api } from '../../../../../services/api'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Tarefa.module.css'
const Tarefa = ({id, titulo, completed, setHandlingTarefa}) => {

    function deletaTarefa(idDaTarefa){
        api.delete(`/tarefas/${idDaTarefa}`).then(() => setHandlingTarefa('tarefa deletada')).catch(console.log)
    }

    return ( 
        <li className={styles.tarefa} key={id}> {titulo} <AiOutlineClose onClick={deletaTarefa(id)}/> </li>
     );
}
 
export default Tarefa;