import React, { useEffect, useState } from 'react';

import api from '../../service/api';

import './styles.css';

import HomeHeader from '../Home-header';
import SearchInput from '../Search-input';
import CheckinPatient from '../Checkin-patient';


const MedicalRecordsHistory: React.FC = () => {
  const [medicalRecordsHistory, setMedicalRecordsHistory] = useState<Array<any>>([])
  
  useEffect(() => {
    api.get('medical-records-history').then(response => {
      setMedicalRecordsHistory(response.data)
      console.log(response.data);
    })
  }, [])

  return(
    <div className="medical-records-history-container">
      <HomeHeader title='Histórico de prontuários' />
      <SearchInput />
      {
          medicalRecordsHistory.map( (record: any) => {
            return <CheckinPatient record={ record } />
          })
        }
    </div>
  )
};

export default MedicalRecordsHistory;