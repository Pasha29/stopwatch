const STARTSTOPWATCH = 'STARTSTOPWATCH';
const FINISHSTOPWATCH = 'FINISHSTOPWATCH';
const RESETSTOPWATCH = 'RESETSTOPWATCH';
const WAITINGSTOPWATCH = 'WAITINGSTOPWATCH';
const STEPSTOPWATCH = 'STEPSTOPWATCH';

const initialState = {
    isOn: false,
    setWaiting: false,
    time: 0,
};

const stopwatchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'STARTSTOPWATCH': {
            return {
                ...state,
                // time: state.time + 1,
                isOn: true,
                step: action.step,
                interval: action.interval
            }
        }
        case 'FINISHSTOPWATCH': {
            clearInterval(state.interval)
            return {
                ...state,
                time: 0,
                isOn: false
            }
        }
        case 'STEPSTOPWATCH': {
            return {
                ...state,
                time: state.time + (action.time - state.step),
                step: action.time
            }
        }
        case 'RESETSTOPWATCH': {
            return {
                ...state,
                time: 0
            }
        }
        case 'WAITINGSTOPWATCH': {
            clearInterval(state.interval)
            return {
                ...state,
                isOn: false
            }
        }
        default:
            return state;
    }
}

const startStopwatchAC = (step, interval) => ({type: STARTSTOPWATCH, step, interval})

const finishStopwatchAC = () => ({type: FINISHSTOPWATCH})

const resetStopwatchAC = () => ({type: RESETSTOPWATCH})

const waitingStopwatchAC = () => ({type: WAITINGSTOPWATCH})

const stepStopwatchAC = (time) => ({type: STEPSTOPWATCH, time})


export const startStopwatchTC = () => {
    return (dispatch) => {
        const interval = setInterval( () => {
            dispatch(stepStopwatchAC(Date.now()));
        });
        dispatch(startStopwatchAC(Date.now(), interval));
    }
}

export const finishStopwatchTC = () => {
    return (dispatch) => {
        dispatch(finishStopwatchAC());
    }
}

export const resetStopwatchTC = () => {
    return (dispatch) => {
        dispatch(resetStopwatchAC());
    }
}

export const waitingStopwatchTC = () => {
    return (dispatch) => {
        dispatch(waitingStopwatchAC());
    }
}

export default stopwatchReducer;
