import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main } from './components/Pages/Main';


export const RouterPages = () => (
  <Switch>
    {/* Main page */}
    <Route exact path="/" component={Main} />

    {/* If the user access a wrong route */}
    <Redirect to="/" />
  </Switch>
);

export default RouterPages;
