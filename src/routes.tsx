import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes';

import Login from './views/pages/Login';
import Specialist from './views/pages/Specialist';
import Receptionist from './views/pages/Receptionist';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/receptionist/schedule" component={Receptionist} />
        <PrivateRoutes path="/receptionist/registration" component={Receptionist} />
        <PrivateRoutes path="/specialist/appointment" component={Specialist} />
        <PrivateRoutes path="/specialist/history" component={Specialist} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;