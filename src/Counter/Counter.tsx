import React from 'react';
import {Button} from '../components/Button/Button';
import {DisplayValue} from "../DisplayValue/DisplayCounter";
import classes from "./Counter.module.css"

type CounterType = {
    count: number
    setCount: (count: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void

}

export const Counter: React.FC<CounterType> = ({count, setCount, ...props}) => {

    const increaseCount = () => {
        setCount(count + 1)
        console.log(props.maxValue)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={classes.content}>
            <DisplayValue maxValue={props.maxValue} value={count}/>
            <div className={classes.button}>
                <Button onClick={increaseCount}
                        disabled={count === props.maxValue }
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


