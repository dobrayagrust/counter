import React from 'react';
import classes from "./DisplayCounter.module.css";

export type DisplayType = {
    value: number
    maxValue: number
}


export const DisplayValue = (props: DisplayType) => {

    const classValue = props.value === props.maxValue ? classes.displayEnd : classes.displayValue

    return (
        <div className={classValue}>{props.value}</div>
    )
}


