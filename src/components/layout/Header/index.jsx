import React , { useState }from 'react';
import { MdPermIdentity, MdSearch, MdToc } from "react-icons/md";
import styles from './Header.module.css'
import logo from '../../../imagens/Educa logo.png'
import NavBar from './NavBar';
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
            {showNavBar && <NavBar/>}
        </>
     );
}
 
export default Header;