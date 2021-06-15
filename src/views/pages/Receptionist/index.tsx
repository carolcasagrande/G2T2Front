import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import PatientForm from '../../../components/Patient-form'
import Navbar from '../../../components/Navbar';

import api from '../../../service/api';

import HomeHeader from '../../../components/Home-header';
import PatientsHead from '../../../components/Patients-head';
import PatientsBody from '../../../components/Patients-body';
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
    <div className="nav-cards">
    <Navbar/>
    <div className="container container-home">      
      <div className="dashboard">        
        <div>
            <div className="column-receptionist column-2">
                <HomeHeader title='Olá atendente' />
            </div>
            <div className="column-receptionist column-1" >
                <div className='patients-table'>
                    <HomeHeader title='Agendamentos do dia' />
                    <div className='column-body'>
                        <PatientsHead />
                        {
                        checkins.map( (checkin: any) => {
                            return <PatientsBody key={checkin._id} checkin={ checkin } />
                        })
                        }
                    </div>
                </div>  
                
            {/* <button  onClick={handleClick} className='btn-history-queue'>
                {queue? ('Ir para histórico de prontuários') : ('Ir para fila de pacientes')}
            </button> */}
            </div>
            
        </div>        

        <div className="column-receptionist">
          <HomeHeader title='Cadastro de Paciente' />
          <PatientForm />
        </div>

      </div>
    </div>
    </div>
  )
};

export default Receptionist;