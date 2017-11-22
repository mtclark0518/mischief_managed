import React from 'react';
import { render } from 'react-dom';
// import { MainRoutes } from './config/routes'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
// const Routes = MainRoutes()
const Root = document.getElementById('root')

render(
    <App />, 
    Root
);
registerServiceWorker();
