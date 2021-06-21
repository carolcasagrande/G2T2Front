import React from 'react';
import { useSelector } from 'react-redux'

import PatientsHead from '../Patients-head';
import WaitingListPatient from '../Waiting-list-patient';

import HomeHeader from '../Home-header';

import './styles.css'

const WaitingList: React.FC = () => {
  const services = useSelector((state: any) => state.services.servicesWaitingAppointment)

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

