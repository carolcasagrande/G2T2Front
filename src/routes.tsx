import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import { useDispatch, useSelector } from 'react-redux'

import Login from './views/pages/Login';
import Specialist from './views/pages/Specialist';
import Receptionist from './views/pages/Receptionist';

const Routes: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser)

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Login} /> */}
        {console.log(currentUser)}
        <Route 
          exact 
          path='/'
          render={() => currentUser ?
            (currentUser.user_profile === 'Especialista' ?
              <Redirect to='/specialist/appointment' />
            :
              <Redirect to='/receptionist/schedule' />
            )
            : (<Login />)}
            />
        <PrivateRoutes path="/receptionist/schedule" component={Receptionist} />
        <PrivateRoutes path="/receptionist/registration" component={Receptionist} />
        <PrivateRoutes path="/specialist/appointment" component={Specialist} />
        <PrivateRoutes path="/specialist/history" component={Specialist} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;