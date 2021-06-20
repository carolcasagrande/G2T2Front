import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import edit from '../../img/pencil.png';
import trash from '../../img/trash.png';

import api from '../../service/api';

import PatientsHead from '../Patients-head';
import WaitingListPatient from '../Waiting-list-patient';

import HomeHeader from '../Home-header';


import './styles.css'

const WaitingList: React.FC = () => {
  const [medicalRecordsHistory, setMedicalRecordsHistory] = useState<Array<any>>([])
  const services = useSelector((state: any) => state.services.services)

  
  return(

    <div className='patients-table'>
      <HomeHeader title="Fila de espera" />
      <PatientsHead />
      <div className='tbody'>
        {
          services ?
            (services.map( (service: any) => {
              return (
                  <WaitingListPatient service={service} key={service.id}/>
              )
            }))
          :
            (<div className='patients-waiting-not-selected'><h3>Não há pacientes na fila de espera</h3></div>)

        }
      </div>
    </div>

  )

};

export default WaitingList;

