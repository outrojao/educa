import React from 'react';
import Header from '../../layout/Header';
import styles from './Home.module.css'
const Home = () => {
    return ( 
        <>
        <Header/>
        <div className={styles.home}>
            <h1>Home</h1>
        </div>
        </> 
    );
}
 
export default Home;