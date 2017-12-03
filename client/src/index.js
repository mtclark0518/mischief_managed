import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hogwarts from './containers/container'
const Root = document.getElementById('root')

render(
    <Hogwarts />, 
    Root
);
registerServiceWorker();
