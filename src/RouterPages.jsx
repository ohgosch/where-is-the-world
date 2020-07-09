import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main } from './components/Pages/Main';
import { Country } from './components/Pages/Country';

export const RouterPages = () => (
  <Switch>
    {/* Main page */}
    <Route exact path="/" component={Main} />

    {/* Country detail page */}
    <Route exact path="/country/:id" component={Country} />

    {/* If the user access a wrong route */}
    <Redirect to="/" />
  </Switch>
);

export default RouterPages;
