import React from 'react';
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({nomeUsuario}) => {
    return ( 
        <nav className={styles.navbar}>
            <ul className={styles.list_nav}>
                <li>
                    <Link to={`/home/${nomeUsuario}`}>Home</Link>
                </li>
                <li>
                    <Link to="/materiais">Materiais</Link>
                </li>
                <li>
                    <Link to={`/perfil/${nomeUsuario}`}>Perfil</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default NavBar;