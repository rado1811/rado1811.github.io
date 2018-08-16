import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(<Router history={hashHistory}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
