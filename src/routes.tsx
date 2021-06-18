import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Specialist from './views/pages/Specialist';
import Receptionist from './views/pages/Receptionist';
import SpecialistForm from './components/Specialist-form';
import MedicalRecordForm from './components/Medical-record-form';
 
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Specialist} />
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/login" component={Login} />
        <Route path="/specialist" component={SpecialistForm} />
       <Route path="/history" component={MedicalRecordForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;