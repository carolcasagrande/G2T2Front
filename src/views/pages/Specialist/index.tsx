import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pusher from 'pusher-js';


import { setSpecialistNavbarActive } from '../../../redux/navbar/navbar.actions.js';

import api from '../../../service/api';

import PatientsWaiting from '../../../components/Patients-waiting';
import MedicalRecordsHistoryList from '../../../components/Medical-records-history-list';
import MedicalRecordForm from '../../../components/Medical-record-form';
import MedicalRecordsShow from '../../../components/Medical-records-show';
import Navbar from '../../../components/Navbar';

import './styles.css';

import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';


const Specialist: React.FC = () => {
  const [checkins, setCheckins] = useState<Array<any>>([])
  const [queue, setQueue] =  useState<Boolean>(true)
  const dispatch = useDispatch();
  const activeTab = useSelector((state: any) => state.navbar.activeSpecialistNavbar)

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
  
  return (
  
    <div className='dashboard-and-navbar'>
      <Navbar>   
        <div onClick={() => dispatch(setSpecialistNavbarActive('appointment'))}
          className={activeTab === 'appointment' ? "active-tab" : ''}
        >
          <PeopleIcon style={{ fontSize: 60, color:'#D40054' }}/> 
          Consulta
        </div>
        <div onClick={() => dispatch(setSpecialistNavbarActive('history'))}
          className={activeTab === 'history' ? "active-tab" : ''}
        >
          <ListAltIcon style={{ fontSize: 60, color:'#D40054' }}/> 
          Histórico
        </div>
      </Navbar> 
      <div className="container container-home">
        <div className="row dashboard">
        
          <div className="column">
            {activeTab === 'appointment'
              ?(<PatientsWaiting checkins={checkins} title="Pacientes na fila de espera" />) 
                : (<MedicalRecordsHistoryList />)
            }
          </div>

          <div className="column">
            {activeTab === 'appointment'?
              (<MedicalRecordForm />)
              : (<MedicalRecordsShow />)}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Specialist;