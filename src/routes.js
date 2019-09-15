import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

/**
 * App routes
 * @return {page} component - route page called by client.
 */
export default function Routes() {
  return (
    // Browser router enable multipage to be loaded on browser
    <BrowserRouter>
      {/* Switch accept only one page per to be loaded on browser */}
      <Switch>
        {/* The router controler */}
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
