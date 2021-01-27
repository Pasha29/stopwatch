import React from 'react';
import Stopwatch from './Stopwatch';
import { startStopwatchTC, finishStopwatchTC, resetStopwatchTC, waitingStopwatchTC } from './../../Reducers/StopwatchReducer';
import { connect } from 'react-redux';

const StopwatchContainer = (props) => {
    const timeFormat = (time) => {
        const splitTime = (time, length) => {

            while(time.length < length) {
                time = "0" + time;
            }
            return time;
        }

        time = new Date(time);

        time.setHours(0);
        let h = splitTime(time.getHours().toString(), 2);
        let m = splitTime(time.getMinutes().toString(), 2);
        let s = splitTime(time.getSeconds().toString(), 2);
        
        return `${h}:${m}:${s}`;
    }

    
    return (
        <Stopwatch time={props.time} timeFormat={timeFormat} startStopwatchTC={props.startStopwatchTC}
         finishStopwatchTC={props.finishStopwatchTC} resetStopwatchTC={props.resetStopwatchTC}
         waitingStopwatchTC={props.waitingStopwatchTC}/>
    )
}

const mapStateToProps = (state) => {
    return {
        time: state.stopwatch.time
    }
}

export default connect(mapStateToProps, { startStopwatchTC, finishStopwatchTC, resetStopwatchTC, waitingStopwatchTC })(StopwatchContainer);