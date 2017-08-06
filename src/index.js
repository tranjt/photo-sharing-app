import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { getUsers } from "./actions/actions";
import './index.css';
import App from './App';
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);



store.dispatch(getUsers());

ReactDOM.render(
     <BrowserRouter>
        <Provider store={store}>  
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
