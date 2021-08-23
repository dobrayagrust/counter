import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./components/Counter/Counter";
import { SetDisplayCounter } from './components/SetCounter/SetDisplayCounter';

ReactDOM.render(
  <React.StrictMode>
      <Counter/>
      <SetDisplayCounter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
