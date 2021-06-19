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
      <HomeHeader title='Pacientes' />
      <SearchInput />
      {
        medicalRecordsHistory ?
          (medicalRecordsHistory.map( (record: any) => {
            return (
                <MedicalRecordHistory record={record} key={record.id}/>
            )
          }))
        :
          (<div className='medicalrecords-history-list-not-selected'><h3>Não há pacientes no seu histórico</h3></div>)
        }
    </div>
  )
};

export default MedicalRecordsHistoryList;