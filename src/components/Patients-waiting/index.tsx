import React, { useState, useEffect } from 'react';

import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import api from '../../service/api';

import PatientsHead from '../Patients-head';
import MedicalRecordHistory from '../Medical-record-history';

import HomeHeader from '../Home-header';


import './styles.css'

const PatientsWaiting: React.FC = () => {
  const [medicalRecordsHistory, setMedicalRecordsHistory] = useState<Array<any>>([])

  useEffect(() => {
    try {
      api.get('medical-records-history').then(response => {
        setMedicalRecordsHistory(response.data)
        console.log(response.data);
      })  
    } catch (error) {
      prompt('Algo deu errado: Por favor recarregue a página!')
    }
  }, [])
  
  return(

    <div className='patients-table'>
      <HomeHeader title="Fila de espera" />
      <PatientsHead />
      <div className='tbody'>
        {
          medicalRecordsHistory.map( (record: any) => {
            return (
                <MedicalRecordHistory record={record} key={record.id}/>
            )
          })
        }
      </div>
    </div>

  )

};

export default PatientsWaiting;

