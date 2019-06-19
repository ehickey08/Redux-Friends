//dependency imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import {createStore, applyMiddleware} from "redux"

//styling
import './index.css';

//components
import App from './App';
import rootReducer from "./reducers"

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store = {store}>
        <App />        
    </Provider>,
    document.getElementById('root')
);

