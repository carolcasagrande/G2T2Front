import React from 'react';

import HomeHeader from '../Home-header';
import SearchInput from '../Search-input';

const MedicalRecordsHistory: React.FC = () =>(

  <div className="medical-records-history-container">
    <HomeHeader title='Histórico de prontuários' />
    <SearchInput />
  </div>
);

export default MedicalRecordsHistory;