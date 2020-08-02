import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './App';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore( reducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
