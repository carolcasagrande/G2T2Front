import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Specialist from './views/pages/Specialist';
import Receptionist from './views/pages/Receptionist';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/specialist/appointment" component={Specialist} />
        <Route path="/specialist/history" component={Specialist} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;