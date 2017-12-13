import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Hogwarts from './containers/Hogwarts'
import registerServiceWorker from './registerServiceWorker';
const Root = document.getElementById('root')


ReactDom.render(
    <Hogwarts />,
    Root
);
registerServiceWorker();




