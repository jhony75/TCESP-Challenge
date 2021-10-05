import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CitiesList from './api/CitiesList'

ReactDOM.render(
  <React.StrictMode>
    <CitiesList />
  </React.StrictMode>,
  document.getElementById('root')
);
