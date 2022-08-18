import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './body';
import './accets/style/style.css'
import { OpenerContext } from './openerContext';
import { InputContext } from './inputContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenerContext>
      <InputContext>
        <Body />
      </InputContext>
    </OpenerContext>
  </React.StrictMode>
);


