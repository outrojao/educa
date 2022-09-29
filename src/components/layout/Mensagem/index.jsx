import styles from './Mensagem.module.css'
const Mensagem = ({mensagem, tipo}) => {
    return ( 
        <div className={styles[tipo]}>
            <p>{mensagem}</p>
        </div>
     );
}
 
export default Mensagem;