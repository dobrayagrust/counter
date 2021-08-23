import React, {useState} from 'react';

import classes from "./SetCounter.module.css"
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";


export const SetCounter = () => {

    let [maxValue, setMaxValue] = useState('')
    let [startValue, setStartValue] = useState('')

    return (
        <div className={classes.display}>
            <div className={classes.setValue}>
                <div>
                    <h6>Start Value</h6>
                    <Input/>
                    </div>
                <div>
                    <h6>Maximum Value</h6>
                    <Input/>
                </div>
            </div>
            <div className={classes.button}>
                <Button title={"Set"}
                        onClick={() => {}}
                />
            </div>
        </div>
            )
            }

