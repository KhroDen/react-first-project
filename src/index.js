import './index.css';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();