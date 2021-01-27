import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import StopwatchContainer from './Components/Stopwatch/StopwatchContainer';
import store from './Reducers/ReduxStore';

function App() {
  return (
    <Provider store={store}>
      <StopwatchContainer />
    </Provider>
  );
}

export default App;
