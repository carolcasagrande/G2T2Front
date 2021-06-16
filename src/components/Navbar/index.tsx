import React from 'react';
import './styles.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Navbar: React.FC = () => {
  return (
      <div className="side-navbar-container">
        <nav className="menu-lateral">
          <a href="#">
              <EventAvailableIcon style={{ fontSize: 65, color:'#D40054' }}/> 
              <p>Agendamento</p> 
          </a>
          <a href="#">
              <AssignmentIndIcon style={{ fontSize: 65, color:'#D40054'  }}/>
              <p>Cadastro</p> 
          </a>
        </nav>
      </div>

    );
}

export default Navbar;