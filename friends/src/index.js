//dependency imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import {setAxiosDefaultConfig} from 'useful-react-hooks'
//styling
import './index.css';
import 'antd/dist/antd.css';

//components
import App from './App';

setAxiosDefaultConfig({baseURL: "http://localhost:5000/api", timeout: 1000})

ReactDOM.render(
        <Router>
            <App />        
        </Router>,
    document.getElementById('root')
);


