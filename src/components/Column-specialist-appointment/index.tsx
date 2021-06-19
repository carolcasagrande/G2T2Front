import React from 'react';

import PatientsWaiting from '../Patients-waiting';
import MedicalRecordForm from '../Medical-record-form';
import MedicalRecordsShow from '../Medical-records-show';


import './styles.css'

const ColumnSpecialistAppointment: React.FC = () => (
  <>
    <div className="column column-small">
      <PatientsWaiting />
    </div>
    <div className="column column-medium">
      <MedicalRecordsShow />
    </div>
    <div className="column column-medium">
      <MedicalRecordForm /> 
    </div>
  </>
);

export default ColumnSpecialistAppointment;