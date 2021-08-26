import React, {ChangeEvent, useEffect, useState} from 'react';

import classes from "./SetCounter.module.css"
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";

type SetCounterType = {
    setCount: (count: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}


export const SetCounter = (props: SetCounterType) => {

    let [startValue, setStartValue] = useState(0)

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value);
    }

    useEffect(() => {
        const getValueAsString = localStorage.getItem('counterStartValue')
        if (getValueAsString) {
            const getNewLocalValue = JSON.parse(getValueAsString)
            setStartValue(getNewLocalValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }, [startValue])

/*    const setStartValueToLocalStorage = () => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }*/

/*    const getStartValueFromLocalStorage = () => {
        const getValueAsString = localStorage.getItem('counterStartValue')
        if (getValueAsString) {
            const getNewLocalValue = JSON.parse(getValueAsString)
            setStartValue(getNewLocalValue)
        }
    }*/

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value);
    }

    useEffect(() => {
        const getValueAsString = localStorage.getItem('counterMaximumValue')
        if (getValueAsString) {
            const getNewLocalValue = JSON.parse(getValueAsString)
           props.setMaxValue(getNewLocalValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaximumValue', JSON.stringify(props.maxValue))
    }, [props.maxValue])
/*
    const setMaxValueToLocalStorage = () => {
        localStorage.setItem('counterMaximumValue', JSON.stringify(maxValue))
    }
*/

/*
    const getMaxValueFromLocalStorage = () => {
        const getValueAsString = localStorage.getItem('counterMaximumValue')
        if (getValueAsString) {
            const getNewLocalValue = JSON.parse(getValueAsString)
            setMaxValue(getNewLocalValue)
        }
    }
*/
    const ClearSettings = () => {
        localStorage.clear()
        props.setMaxValue(0)
        setStartValue(0)
    }

    const ApplySettingToCounter = () => {
        props.setCount(startValue)
    }

    return (
        <div className={classes.display}>
            <div className={classes.setValue}>
                <div>
                    <h6>Start Value</h6>
                    <Input onChange={startValueHandler} value={startValue}/>
                </div>
                <div>
                    <h6>Maximum Value</h6>
                    <Input onChange={maxValueHandler} value={props.maxValue}/>
                </div>
            </div>
            <div className={classes.button}>
                <Button title={"Set"}
                        onClick={ApplySettingToCounter}
                disabled={startValue === props.maxValue || startValue > props.maxValue}/>

                <Button title={"Reset"}
                onClick={ClearSettings}
                />
            </div>
        </div>
    )
}

