import React , { useState }from 'react';
import { MdPermIdentity, MdSearch, MdToc } from "react-icons/md";
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../../imagens/Educa logo.png'
const Header = () => {

    const [showNavBar, setShowNavBar] = useState(false)

    function handleNavBarVisibility(){
        setShowNavBar(!showNavBar)
    }

    return (
        <>
            <header className={styles.header_container}>
                <div className={styles.header_items}>
                    <MdToc onClick={handleNavBarVisibility}/>
                    <img src={logo} alt="Educa" />
                    <div className={styles.header_icons}>
                        <MdSearch/>
                        <MdPermIdentity/>
                    </div>
                </div>
            </header>
            {showNavBar && (
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
                )}
        </>
     );
}
 
export default Header;