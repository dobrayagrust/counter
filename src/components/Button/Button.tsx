import React from 'react';
import classes from "./Button.module.css";

export type buttonType = {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

export const Button = (props: buttonType) => {
    return (
        <button className={classes.button} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}


