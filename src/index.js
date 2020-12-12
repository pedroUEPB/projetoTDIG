import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import CadProjeto from './components/pages/Projeto';

ReactDOM.render(
  <React.StrictMode>
    <CadProjeto />
  </React.StrictMode>,
  document.getElementById('root')
);
