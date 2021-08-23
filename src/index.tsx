import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './Counter/Counter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {SetCounter} from "./SetCounter/SetCounter";

ReactDOM.render(
    <React.StrictMode>
        <Counter/>
        <SetCounter/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
