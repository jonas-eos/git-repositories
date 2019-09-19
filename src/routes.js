import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

/**
 * Routes manipulator
 *
 * @requires react-router-dom.BrowserRouter
 * @requires react-router-dom.Switch
 * @requires react-router-dom.Route
 *
 * @requires ./pages/Main
 * @requires ./pages/Repository
 *
 * @return {route} component - route page called by client.
 */
export default function Routes() {
  return (
    // Browser router enable multipage to be loaded on browser
    <BrowserRouter>
      {/* Switch accept only one page to be loaded on browser */}
      <Switch>
        {/* The router controler */}
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
