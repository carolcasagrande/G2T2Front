import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//web-socket
import Pusher from 'pusher-js';
//axios
import api from '../../../service/api';
//Components
import PatientForm from '../../../components/Patient-form'
import Navbar from '../../../components/Navbar';
import HomeHeader from '../../../components/Home-header';
import PatientsHead from '../../../components/Patients-head';
import PatientsBody from '../../../components/Patients-body';
import CallsForm from '../../../components/CallsForm';
//Material-ui
import Accordion from '@material-ui/core/Accordion';
//import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
//Redux action
import { setReceptionistNavbarActive } from '../../../redux/navbar/navbar.actions.js';
//Styles
import './styles.css';
//import ReceptionistBody from '../../../components/Receptionist-body';

interface IClient {
  address_id: number;
  cpf: string;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  type_blood: string;
}
interface ISpecialist {
  address_id: number;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  profession_id: number;
  register: string;
}
interface ISchedule {
  client: {
  address_id: number;
  cpf: string;
  email: string;
  id: number;
  mobile: string;
  name: string;
  phone: string;
  type_blood: string;
};
  date_schedule: string;
  date_service: string;
  specialist: ISpecialist;
  status_service: string;
  time_service: string;
} 

const Receptionist: React.FC = () => {
  const [checkins, setCheckins] = useState<Array<any>>([])
  const [schedules, setSchedules] = useState<ISchedule[]>([])

  const dispatch = useDispatch();
  const activeTab = useSelector((state: any) => state.navbar.activeReceptionistNavbar);

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(()=> {
    api.get('services').then(response => {
      setSchedules(response.data)
      console.log("@@@@")
      console.log(schedules)
      console.log("@@@@@")
    })
  }, [])

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
  
  return(
    <div className="nav-cards">
    <Navbar>
      <div onClick={() => dispatch(setReceptionistNavbarActive('scheduling'))}
        className={activeTab === 'scheduling' ? "active-tab" : ''}
      >
        <EventAvailableIcon style={{ fontSize: 60, color:'#D40054' }}/> 
        Agendar
      </div>
      <div onClick={() => dispatch(setReceptionistNavbarActive('registration'))}
        className={activeTab === 'registration' ? "active-tab" : ''}
      >
        <AssignmentIndIcon style={{ fontSize: 60, color:'#D40054'  }}/>
        Cadastrar
      </div>
    </Navbar>
    <div className="container container-home">      
      <div className="dashboard">        
        <div>
            <div className="column-receptionist column-2">
                <HomeHeader title='Olá, Maria!' />
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

                      <PatientsHead />

                      <div className='column-body'>
                       
                      </div>

                    </div>

                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <div className="header-receptionist receptionist-none-border">
                      <HomeHeader title='Checkins' />
                    </div>
                  </AccordionSummary>
                    <div className='column-body header-receptionist'>
                      <PatientsHead />

                      {
                        checkins.length > 1 ?
                          checkins.map( (checkin: any) => {
                              return <PatientsBody key={checkin._id} checkin={ checkin } />
                          })
                        :
                        <p>Nenhum paciente agendado para hoje.</p>
                      }
                    </div>
                </Accordion>
                
                {/* {schedules && schedules.map(schedule => (
                          <p>{schedule.client}</p>
                        ))
                }  */}

            </div>
        </div>        

        <div className="column-receptionist">
          {activeTab === 'registration' ?
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