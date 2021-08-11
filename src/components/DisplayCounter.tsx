import React from 'react';
import classes from "./DisplayCounter.module.css";

export type displayType = {
    value: number;
}

export const Display = (props: displayType) => {
    return (

        <div className={classes.displayCounter}>{props.value}</div>
    )
}


