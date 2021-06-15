import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import PatientForm from '../../../components/Patient-form'

import api from '../../../service/api';

import HomeHeader from '../../../components/Home-header';
import PatientsWaiting from '../../../components/Patients-waiting';
import MedicalRecordsHistory from '../../../components/Medical-records-history';
import MedicalRecordForm from '../../../components/Medical-record-form';

import './styles.css';

const Receptionist: React.FC = () => {
  const [checkins, setCheckins] = useState<Array<any>>([])
  const [queue, setQueue] =  useState<Boolean>(true)

  // connection with mongoDB using websocket
  useEffect(() => {
    api.get('checkins/sync').then(response => {
        setCheckins(response.data);
        console.log(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('cde1c800fa96905d8626', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('checkins');
    channel.bind('inserted', (newCheckin: any) => {
      alert(JSON.stringify(newCheckin));
      setCheckins([...checkins, newCheckin])
    }); 

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [checkins])

  console.log(checkins);

  const handleClick = () => {
    setQueue(!queue)
  }
  
  return(
    <div className="container container-home">
      <div className="row dashboard">
        
        <div className="column">
            <div className="column column-left-up">
                <HomeHeader title='Olá atendente' />
                <p>top</p>
            </div>
            <div className="column column-left-down" >
            <HomeHeader title='Agendamentos do dia' />
            {/* {queue? (<PatientsWaiting checkins={checkins} />) : (<MedicalRecordsHistory />)} */}
                
            <button  onClick={handleClick} className='btn-history-queue'>
                {queue? ('Ir para histórico de prontuários') : ('Ir para fila de pacientes')}
            </button>
            </div>
            
        </div>        

        <div className="column column-right">
          <HomeHeader title='Cadastro de Paciente' />
          <PatientForm />
        </div>

      </div>
    </div>
  )
};

export default Receptionist;