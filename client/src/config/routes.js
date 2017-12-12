import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import history from './history';
import Hogwarts from '../containers/Hogwarts'


export const makeMainRoutes = () => {
  return (
      <Router history={history} component={Hogwarts}>
        <div>
          <Route path="/" render={(props) => 
            <Hogwarts {...props} />} 
          />

        </div>
      </Router>
  );
}
