import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Web-socket
import Pusher from 'pusher-js';
// Axios
import api from '../../../service/api';
// Components
import Navbar from '../../../components/Navbar';
import ColumnSpecialistAppointment from '../../../components/Column-specialist-appointment';
import ColumnSpecialistHistory from '../../../components/Column-specialist-history';
// Material-ui
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
// Redux action
import { setMedicalRecordActive } from '../../../redux/medical-record/medical-record.actions.js';
// Styles
import './styles.css';


const Specialist: React.FC = () => {
  const [checkins, setCheckins] = useState<Array<any>>([]);
  const [queue, setQueue] =  useState<Boolean>(true);
  const dispatch = useDispatch();
  const urlLocation = useLocation<Array<{}>>();

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

  const handleClick = (tab: string) => {
    dispatch(setMedicalRecordActive(null));
  };
  
  return (
  
    <div className='dashboard-and-navbar'>
      <Navbar> 
        <Link to='/specialist/appointment'>
          <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleClick('appointment')}
            className={urlLocation.pathname === '/specialist/appointment' ? "active-tab" : ''}
          >
            <PeopleIcon style={{ fontSize: 60, color:'#D40054' }}/> 
            Consulta
          </div>
        </Link> 
        <Link to='/specialist/history'>
          <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleClick('history')}
            className={urlLocation.pathname === '/specialist/history' ? "active-tab" : ''}
          >
            <ListAltIcon style={{ fontSize: 60, color:'#D40054' }}/> 
            Histórico
          </div>
        </Link> 
      </Navbar> 
      <div className="container container-home">
        <div className="row dashboard">
        
          { urlLocation.pathname === '/specialist/appointment' ?
            ( <ColumnSpecialistAppointment /> )
            :
            ( <ColumnSpecialistHistory /> )
          }
              
        </div>
      </div>
    </div>

  )
};

export default Specialist;