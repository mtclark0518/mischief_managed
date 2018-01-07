import React from 'react';
import ReactDom from 'react-dom';
import School from './containers/School'
import registerServiceWorker from './registerServiceWorker';
const Root = document.getElementById('root')

ReactDom.render(
    <School />,
    Root
);
registerServiceWorker();




