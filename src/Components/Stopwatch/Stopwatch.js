import React from 'react';
import s from './Stopwatch.module.css';

const Stopwatch = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
            <div className={s.digitsWrapper}>
                <span>{props.timeFormat(props.time)}</span>
            </div>
            
            <div className={s.btnsWrapper}>
                <button onClick={props.startStopwatchTC}>Start</button>
                <button onClick={props.finishStopwatchTC}>Stop</button>
                <button onDoubleClick={props.waitingStopwatchTC}>Wait</button>
                <button onClick={props.resetStopwatchTC}>Reset</button>
            </div>

            </div>
        </div>
    )
}

export default Stopwatch;