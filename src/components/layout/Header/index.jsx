import React , { useState }from 'react';
import { MdPermIdentity, MdSearch, MdToc } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../../imagens/Educa logo.png'
import NavBar from './NavBar';
const Header = ({nomeUsuario}) => {

    const [showNavBar, setShowNavBar] = useState(false)
    const [showSearchInput, setShowSearchInput] = useState(false)
    const navigate = useNavigate()

    function handleNavBarVisibility(){
        setShowNavBar(!showNavBar)
    }

    return (
        <>
            <header className={styles.header_container}>
                <div className={styles.header_items}>
                    <MdToc onClick={handleNavBarVisibility}/>
                    <img src={logo} alt="Educa" onClick={() => navigate(`/home/${nomeUsuario}`)}/>
                    <div className={styles.header_icons}>
                        {showSearchInput && <input type="search"/>}
                        <MdSearch onClick={() => setShowSearchInput(!showSearchInput)}/>
                        <MdPermIdentity onClick={() => navigate(`/perfil/${nomeUsuario}`)}/>
                    </div>
                </div>
            </header>
            {showNavBar && <NavBar nomeUsuario={nomeUsuario} />}
        </>
     );
}
 
export default Header;