import React, {
    useState,
    ChangeEvent,
} from 'react';
import classes from "../Counter/DisplayCounter.module.css";
import {Button} from "../Button/Button";

export type displayType = {
    value: number ;
    // startValueCallback: () => void

}



export const SetDisplayCounter = () => {

    const [startValue, setStartValue] = useState(0)

    const [maxValue, setMaxValue] = useState(0)

    // const onKeyPressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //     }
    // }

    const newInputValue = React.createRef<HTMLInputElement>();

    const inputStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (newInputValue.current) {
            const newValue = (newInputValue.current.value)
            setStartValue(newValue)
        }

        // setStartValue(newInputValue)
        console.log(startValue)
    }
    // const inputMaximumValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setMaxValue(event.currentTarget.value)
    //     console.log(maxValue)
    // }

    const keyPressButtonSet = () => {

        console.log('set')
    }

    return (
        <div className={classes.displayContent}>
            <div className={classes.displayCounter}>
                <div>
                    Start Value
                    <input
                        className={classes.input}
                        type={'number'}
                        value={startValue}
                        disabled={startValue === -1}
                        onChange={inputStartValueHandler}
                    />
                </div>
                <div>
                    Maximum Value
                    <input
                        className={classes.input}
                        type={'number'}
                        value={maxValue}
                        disabled={maxValue === - 1}
                        // onChange={inputMaximumValueHandler}
                    />
                </div>
            </div>
            <div className={classes.displayButton}>
                <Button
                    disabled={startValue === -1 || startValue === maxValue || startValue === 0}
                    title={'Set'}
                    onClick={keyPressButtonSet}
                />
            </div>
        </div>
    )
}

