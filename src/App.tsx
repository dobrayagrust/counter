import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {

    const [startCounterValue, setStartCounterValue] = useState(0)


    const increaseCounterValue = () => {
        setStartCounterValue(startCounterValue + 1)
    }

    return (
        <div className={'counter-wrapper'}>
            <input type={'number'} value={startCounterValue}/>
            <Button title={"Set"} onClick={increaseCounterValue} disabled={startCounterValue === -Infinity}/>
        </div>
    );
}

export default App;
