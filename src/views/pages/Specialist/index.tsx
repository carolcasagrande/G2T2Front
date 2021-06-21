import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Components
import SpecialistAppointment from '../../../components/Specialist-appointment';
import SpecialistHistory from '../../../components/Specialist-history';
import NavbarSpecialist from '../../../components/Navbar-specialist';

// Styles
import './styles.css';

const Specialist: React.FC = () => {
  const urlLocation = useLocation<Array<{}>>();
  const history = useHistory();
  const currentUser = useSelector((state: any) => state.user.currentUser)
  
  if (currentUser?.user_profile === 'Recepcionista') history.push("/receptionist/schedule")
  
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