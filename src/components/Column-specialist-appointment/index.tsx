import React from 'react';

import WaitingList from '../Waiting-list';
import MedicalRecordForm from '../Medical-record-form';
import MedicalRecordsShow from '../Medical-records-show';


import './styles.css'

const ColumnSpecialistAppointment: React.FC = () => (
  <>
    <div className="column column-small">
      <WaitingList />
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