import React from 'react';
import './styles.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Navbar: React.FC = () => {
  return (
      <nav className="menu-lateral">
        <a href="#">
            <EventAvailableIcon style={{ fontSize: 65, color:'#D40054' }}/> 
            Agendamento
        </a>
        <a href="#">
            <AssignmentIndIcon style={{ fontSize: 65, color:'#D40054'  }}/>
            Cadastro
        </a>
      </nav>

    );
}

export default Navbar;