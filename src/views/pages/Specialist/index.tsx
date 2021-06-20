import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import SpecialistAppointment from '../../../components/Specialist-appointment';
import SpecialistHistory from '../../../components/Specialist-history';
import NavbarSpecialist from '../../../components/Navbar-specialist';

// Styles
import './styles.css';

const Specialist: React.FC = () => {
  const urlLocation = useLocation<Array<{}>>();

  
  return (
  
    <div className='dashboard-and-navbar'>
      <NavbarSpecialist />
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