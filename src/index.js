import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import ReactDOM from 'react-dom';
import './asset/index.css';
import store,{ persistedStore} from "./store"
import App from './App';
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={store}>
     <PersistGate persistor={persistedStore} loading={null}>
     <Router>
    <App />
     </Router>
     </PersistGate>
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
