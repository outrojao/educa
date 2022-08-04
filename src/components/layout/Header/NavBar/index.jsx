import React from 'react';
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = () => {
    return ( 
        <nav className={styles.navbar}>
            <ul className={styles.list_nav}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/materias">Materias</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default NavBar;