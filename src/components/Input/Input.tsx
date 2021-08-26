import React, {ChangeEvent} from 'react';
import classes from "./Input.module.css";

export type InputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: number
}


export const Input = (props: InputType) => {

    return (
        <input className={classes.input}
               onChange={props.onChange}
               type={'number'}
               value={props.value}
        >
        </input>
    )
}


