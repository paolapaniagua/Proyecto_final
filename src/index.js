import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore);

const store = finalCreateStore(
    rootReducer
);

ReactDOM.render(
   <Provider store={store}>
        <App />
   </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
