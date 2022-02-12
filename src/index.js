import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import SamuraiJSApp from "./App";


ReactDOM.render(
    <SamuraiJSApp/> ,
  document.getElementById('root')
);


reportWebVitals();