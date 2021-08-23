import React from 'react';
import classes from "./Input.module.css";

export type InputType = {

}

export const Input = (props: InputType) => {

    const changeHandler = () => {

    }
    return (
        <input className={classes.input}
               type={'number'}
               onChange={changeHandler}
        >
        </input>
    )
}


