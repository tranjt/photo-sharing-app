import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import rootReducer from "./reducer/rootReducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
     <BrowserRouter>
        <Provider store={store}>  
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
