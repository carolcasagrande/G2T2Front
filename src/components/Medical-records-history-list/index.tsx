import React, { useEffect, useState } from 'react';

import api from '../../service/api';

import './styles.css';

import HomeHeader from '../Home-header';
import SearchInput from '../Search-input';
import MedicalRecordHistory from '../Medical-record-history';

const MedicalRecordsHistoryList: React.FC = () => {
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
            return (
                <MedicalRecordHistory record={record} key={record.id}/>
            )
          })
        }
    </div>
  )
};

export default MedicalRecordsHistoryList;