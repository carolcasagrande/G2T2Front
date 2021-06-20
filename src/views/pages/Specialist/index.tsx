import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Components
import Navbar from '../../../components/Navbar';
import SpecialistAppointment from '../../../components/Specialist-appointment';
import SpecialistHistory from '../../../components/Specialist-history';
// Material-ui
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
// Redux action
import { setActive } from '../../../redux/active/active.actions.js';
// Styles
import './styles.css';

const Specialist: React.FC = () => {
  const dispatch = useDispatch();
  const urlLocation = useLocation<Array<{}>>();

  const handleClick = (tab: string) => {
    dispatch(setActive(null));
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
            ( <SpecialistAppointment /> )
            :
            ( <SpecialistHistory /> )
          }
              
        </div>
      </div>
    </div>

  )
};

export default Specialist;