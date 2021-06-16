import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


import api from '../../service/api';

import './styles.css';

import {setMedicalRecordActive} from '../../redux/medical-record/medical-record.actions.js'

import HomeHeader from '../Home-header';
import SearchInput from '../Search-input';
import MedicalRecordHistory from '../Medical-record-history';

const MedicalRecordsHistoryList: React.FC = () => {
  const [medicalRecordsHistory, setMedicalRecordsHistory] = useState<Array<any>>([])
  const dispatch = useDispatch();
  const activeMedicalRecord = useSelector((state: any) => state.medicalRecord.activeMedicalRecord)

  
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
              <div
                className={
                  `row row-table-medical-record
                  ${activeMedicalRecord?.id === record.id ? "active" : ""} `
                }
                onClick={() => dispatch(setMedicalRecordActive(record))}
                
              >
                <MedicalRecordHistory record={record} key={record.id}/>
              </div>
            )
          })
        }
    </div>
  )
};

export default MedicalRecordsHistoryList;