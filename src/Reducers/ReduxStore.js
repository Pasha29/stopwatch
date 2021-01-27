import { createStore, combineReducers, applyMiddleware } from 'redux';
import stopwatchReducer from './StopwatchReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    stopwatch: stopwatchReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;