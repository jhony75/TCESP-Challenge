import React from 'react';
import Comparison from '../../components/Comparison/Comparison';

import styles from './comparisonPage.module.css'

const ComparisonPage = () => {
  return(
    <>
      <div className={styles.Title}>
        <h1>Comparação de Municípios</h1>
      </div>
      <div>
        <Comparison />
      </div>
    </>
  )
}

export default ComparisonPage;