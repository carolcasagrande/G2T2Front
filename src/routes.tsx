import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Home from './views/pages/Home';
import Receptionist from './views/pages/Receptionist';
import SpecialistForm from './components/Specialist-form';
import Occupation from './views/pages/Occupation';
import Calls from './views/pages/Calls';
import Record from './views/pages/Record'; 
import MedicalRecordForm from './components/Medical-record-form';
 
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/login" component={Login} />
        <Route path="/specialist" component={SpecialistForm} />
        <Route path="/occupation" component={Occupation} />
        <Route path="/calls" component={Calls} /> 
       <Route path="/record" component={Record} />
       <Route path="/history" component={MedicalRecordForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;