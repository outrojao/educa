import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import styles from './Tarefa.module.css'
const Tarefa = ({id, titulo, completed, excluir, completar}) => {
    return ( 
        <li className={completed === true ? styles.tarefaCompletada : styles.tarefa} key={id}> {titulo} <AiOutlineCheck onClick={completar} style={{color: 'green'}} /> <AiOutlineClose onClick={excluir}/> </li>
     );
}
 
export default Tarefa;