import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search/search';
// import Download from './components/Download/Download';
// import Routes from './components/Router/Routes';
// import Comparison from './components/Comparison/Comparison';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Search />
    {/* <Comparison /> */}
    {/* <Routes /> */}
    {/* <Download /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
