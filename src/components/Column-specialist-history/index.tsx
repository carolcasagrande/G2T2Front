import React from 'react';

import ClientsHistory from '../Clients-history';
import MedicalRecordsShow from '../Medical-records-show';

import './styles.css'

const ColumnSpecialistHistory: React.FC = () => (
  <>
    <div className="column column-large">
      <ClientsHistory />
    </div>
    <div className="column column-large">
      <MedicalRecordsShow />
    </div>
  </>
);

export default ColumnSpecialistHistory;