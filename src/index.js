import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import rootReducer from "./reducers/rootReducer";
import history from "./myHistory";
import { authUser } from "./actions/actions"

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const token = localStorage.getItem("token");
const user = localStorage.getItem('user');
// if we have a token, user, consider the user to be signed in
if (token && user) {    
    // we need to update application state  
    store.dispatch(authUser(JSON.parse(user)));
}

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router >,
    document.getElementById('root')
);
registerServiceWorker();

