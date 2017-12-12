import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {makeMainRoutes} from './config/routes.js';
const Root = document.getElementById('root')
const Routes = makeMainRoutes();


render(
    Routes,
    Root
);
registerServiceWorker();




