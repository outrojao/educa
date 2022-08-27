import { AiOutlineClose } from 'react-icons/ai'
import styles from './Tarefa.module.css'
const Tarefa = ({id, titulo, completed, excluir}) => {
    return ( 
        <li className={styles.tarefa} key={id}> {titulo} <AiOutlineClose onClick={excluir}/> </li>
     );
}
 
export default Tarefa;