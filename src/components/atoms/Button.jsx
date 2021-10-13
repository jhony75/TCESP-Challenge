import React from 'react';
import styles from './atoms.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

const Button = ({ label, type, isSearch }) => {
  return (
    <>
      <button
        className={styles.Button}
        type={type}
      >
        {label} {isSearch? element : undefined}
      </button>
    </>
  )
}

Button.defaultProps = {
  type: "button",
  label: "I'm a button!",
  isSearch: false
}

export default Button