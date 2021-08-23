import React from 'react';
import classes from "./DisplayCounter.module.css";

export type displayType = {
    value: number;

}

export const DisplayCounter = (props: displayType) => {
    const classCounter = props.value === 7 ? classes.stopCounter : classes.counter
    return (
        <div className={classes.displayCounter}>
            <div className={classCounter}>{props.value}</div>
        </div>
    )
}


