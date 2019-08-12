import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Main } from './components/Pages/Main';


export const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* Main page */}
      <Route exact path="/" component={Main} />

      {/* If the user access a wrong route */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
