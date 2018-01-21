import React from 'react';
import ReactDom from 'react-dom';
import School from './components/stateful/School'
import registerServiceWorker from './registerServiceWorker';
const Root = document.getElementById('root')

ReactDom.render(
    <School />,
    Root
);
registerServiceWorker();




