import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StateProvider } from './components/StateProvider';
import {initialState, reducer} from "./configs/reducer";

ReactDOM.render(<React.StrictMode><StateProvider initialState={initialState} reducer={reducer}><App /></StateProvider></React.StrictMode>, document.getElementById('root'));