import React from 'react';
import styles from './atoms.module.css';

const Button = ({ label, type }) => {
  return (
    <>
      <button
        className={styles.Button}
        type={type}
      >
        {label}
      </button>
    </>
  )
}

export default Button