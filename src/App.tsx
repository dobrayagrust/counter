import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./SetCounter/SetCounter";

function App() {
    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

    return (
        <>
            <Counter count={count}
                     setCount={setCount}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
            />
            <SetCounter setCount={setCount}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}
            />
        </>
    )
}

export default App;
