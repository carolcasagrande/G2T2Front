import React from 'react';

import MedicalRecordsHistoryList from '../Medical-records-history-list';
import MedicalRecordsShow from '../Medical-records-show';

import './styles.css'

const ColumnSpecialistHistory: React.FC = () => (
  <>
    <div className="column column-large">
      <MedicalRecordsHistoryList />
    </div>
    <div className="column column-large">
      <MedicalRecordsShow />
    </div>
  </>
);

export default ColumnSpecialistHistory;