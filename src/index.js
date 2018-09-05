import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from './Reducer';
import ReduxThunk from 'redux-thunk';
import './supports/css/bootstrap.min.css';
import './supports/css/tambahanlagi.css';
import './supports/css/cinema.css';
import {createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
