import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import PatientForm from '../../../components/Patient-form'
import HomeHeader from '../../../components/Home-header';
import CallsForm from '../../../components/CallsForm';
import NavbarReceptionist from '../../../components/Navbar-receptionist';
//Material-ui
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Styles
import './styles.css';
import ReceptionistBody from '../../../components/Receptionist-body';

const Receptionist: React.FC = () => {
  const urlLocation = useLocation<Array<{}>>();
  const history = useHistory();
  const currentUser = useSelector((state: any) => state.user.currentUser)
  
  if (currentUser?.user_profile === 'Especialista') history.push("/specialist/appointment")
  
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return(
    <div className="nav-cards">
    <NavbarReceptionist />
    <div className="container container-home">      
      <div className="dashboard">        
        <div className="column-receptionist-status">
            <div className="column-receptionist column-2">
                <HomeHeader title={`Olá ${currentUser?.name}`} />
            </div>
            <div className="column-receptionist column-1" >
                <Accordion className="accordion-receptionist"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="accordion-receptionist"
                  >
                    <div className="header-receptionist receptionist-none-border">
                      <HomeHeader  title='Agendamentos' />
                    </div>
                  </AccordionSummary>

                    <div className="header-receptionist">

                      <div className='column-body'>
                        <ReceptionistBody />
                      </div>

                    </div>

                </Accordion>                

            </div>
        </div>        

        <div className="column-receptionist form-schedule">
          {urlLocation.pathname === '/receptionist/registration' ?
            <>
              <HomeHeader title="Cadastro de paciente" />
              <PatientForm/>
            </>
          : 
            <>
              <HomeHeader title="Agendamento" />
              <CallsForm />
            </>
          }
        </div> 
      </div>
    </div>
    </div>
  )
};

export default Receptionist;