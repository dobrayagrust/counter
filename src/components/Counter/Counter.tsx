import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {DisplayCounter} from "./DisplayCounter";
import classes from "./Counter.module.css"


const Counter = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={classes.display}>
            <div className={classes.outputDisplay}>
                <DisplayCounter value={count}/>
            </div>
            <div className={classes.button}>
                <Button onClick={increaseCount}
                        disabled={count === 7}
                        title={"+"}
                />
                <Button onClick={decreaseCount}
                        disabled={count === 0}
                        title={"-"}
                />
                <Button onClick={resetCount}
                        disabled={count === 0}
                        title={"Reset"}
                />
            </div>
        </div>
    )
}

export default Counter;

