import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// Material-ui
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';


import Navbar from '../Navbar';

// Redux action
import { setActive } from '../../redux/active/active.actions.js';

import './styles.css'

const NavbarSpecialist = () => {
  const dispatch = useDispatch();
  const urlLocation = useLocation<Array<{}>>();
  
  const handleClick = (tab: string) => {
    dispatch(setActive(null));
  };

  return(
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
  )
};

export default NavbarSpecialist;