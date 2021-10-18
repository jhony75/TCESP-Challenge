import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Router/Routes';
import styles from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.Content}>
      <Routes />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);