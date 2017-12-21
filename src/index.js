import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App'
import store from './reducks'
import registerServiceWorker from './registerServiceWorker';

import './stylesheets/skeleton.css'
import './stylesheets/styles.css'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
