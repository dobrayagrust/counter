import React from 'react';
import classes from "./DisplayCounter.module.css";

export type DisplayType = {
    value: number
}


export const DisplayValue = (props: DisplayType) => {

    const classValue = props.value === 7 ? classes.displayEnd : classes.displayValue

    return (
        <div className={classValue}>{props.value}</div>
    )
}


