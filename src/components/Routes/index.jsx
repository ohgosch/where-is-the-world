import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main } from 'pages/Main';
import { Country } from 'pages/Country';

function Routes() {
  return (
    <Switch>
      {/* Main page */}
      <Route exact path="/" component={Main} />

      {/* Country detail page */}
      <Route exact path="/country/:id" component={Country} />

      {/* If the user access a wrong route */}
      <Redirect to="/" />
    </Switch>
  );
}

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
