import React from 'react';

import PatientsWaiting from '../Patients-waiting';
import MedicalRecordForm from '../Medical-record-form';
import MedicalRecordsShow from '../Medical-records-show';


import './styles.css'

interface Props {
  checkins: any;
}

const ColumnSpecialistConsultation: React.FC<Props> = ({ checkins }) => (
  <>
    <div className="column column-small">
      <PatientsWaiting checkins={checkins} />
    </div>
    <div className="column column-medium">
      <MedicalRecordsShow />
    </div>
    <div className="column column-medium">
      <MedicalRecordForm /> 
    </div>
  </>
);

export default ColumnSpecialistConsultation;