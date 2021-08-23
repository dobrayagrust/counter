import React, {useState} from 'react';
import {Button} from '../components/Button/Button';
import {DisplayValue} from "../DisplayValue/DisplayCounter";
import classes from "./Counter.module.css"


export const Counter = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }



    return (
        <div className={classes.content}>
                <DisplayValue value={count} />
            <div className={classes.button}>
                <Button onClick={increaseCount}
                        disabled={count === 7}
                        title={"Inc"}
                />
                <Button onClick={resetCount}
                        disabled={count === 0}
                        title={"Reset"}
                />
            </div>
        </div>
    )
}


