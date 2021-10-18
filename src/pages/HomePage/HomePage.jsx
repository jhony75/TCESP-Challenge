import React from 'react';
import Search from '../../components/Search/Search';
import styles from './homepage.module.css'

const HomePage = () => {
  return(
    <>
    <div className={styles.Title}>
      <h1>Portal Unificado de Transparência</h1>
    </div>
    <div className={styles.Homepage}>
      <Search />
    </div>
    </>
  )
}

export default HomePage;