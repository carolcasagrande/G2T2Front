import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// Material-ui
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import Navbar from '../Navbar';

import './styles.css'

const NavbarReceptionist = () => {
  const urlLocation = useLocation<Array<{}>>();
  console.log(urlLocation)

  return(
  <Navbar>
    <Link to='/receptionist/schedule'>   
      <div className={urlLocation.pathname === '/receptionist/schedule' ? "active-tab" : ''}>
        <EventAvailableIcon style={{ fontSize: 60, color:'#D40054' }}/> 
        Agendar
      </div>
    </Link>
    <Link to='/receptionist/registration'> 
      <div className={urlLocation.pathname === '/receptionist/registration' ? "active-tab" : ''}>
        <AssignmentIndIcon style={{ fontSize: 60, color:'#D40054'  }}/>
        Cadastrar
      </div>
    </Link>
  </Navbar>
  )
};

export default NavbarReceptionist;