import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pusher from 'pusher-js';
import PatientForm from '../../../components/Patient-form'
import Navbar from '../../../components/Navbar';

import api from '../../../service/api';

import HomeHeader from '../../../components/Home-header';
import PatientsHead from '../../../components/Patients-head';
import PatientsBody from '../../../components/Patients-body';
import CallsForm from '../../../components/CallsForm';
import PatientsWaiting from '../../../components/Patients-waiting';
import MedicalRecordsHistory from '../../../components/Medical-records-history-list';
import MedicalRecordForm from '../../../components/Medical-record-form';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import './styles.css';

const Receptionist: React.FC = () => {
  const [checkins, setCheckins] = useState<Array<any>>([])
  const [queue, setQueue] =  useState<Boolean>(true)
  const [pageActive, setPageActive] = useState('');

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  console.log(checkins);
  const handleState = (page:string) =>{
    // setPageActive()
    console.log(pageActive);
    
  }

  const handleClick = () => {
    setQueue(!queue)
  }
  
  return(
    <div className="nav-cards">
    <Navbar>
      <div>
        <EventAvailableIcon style={{ fontSize: 60, color:'#D40054' }}/> 
        Agendamento
      </div>
      <div>
        <AssignmentIndIcon style={{ fontSize: 60, color:'#D40054'  }}/>
        Cadastro
      </div>
    </Navbar>
    <div className="container container-home">      
      <div className="dashboard">        
        <div>
            <div className="column-receptionist column-2">
                <HomeHeader title='Olá atendente' />
            </div>
            <div className="column-receptionist column-1" >
              {/* <div className='patients-table'>
                  <HomeHeader title='Agendamentos do dia' />
                  <div className='column-body'>
                      <PatientsHead />
                      {
                      checkins.map( (checkin: any) => {
                          return <PatientsBody key={checkin._id} checkin={ checkin } />
                      })
                      }
                  </div>
              </div>   */}
                <Accordion className="accordion-receptionist"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="accordion-receptionist"
                  >
                    <div className="header-receptionist">
                      <HomeHeader  title='Agendamentos do dia' />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails >
                    <div className="header-receptionist">
                      <PatientsHead />
                      <div className='column-body'>
                        {
                        checkins.map( (checkin: any) => {
                            return <PatientsBody key={checkin._id} checkin={ checkin } />
                        })
                        }
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <div className="header-receptionist">
                      <HomeHeader title='Checkins' />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='column-body header-receptionist'>
                        {
                        checkins.map( (checkin: any) => {
                            return <PatientsBody key={checkin._id} checkin={ checkin } />
                        })
                        }
                      </div>
                  </AccordionDetails>
                </Accordion>
            </div>
        </div>        

        <div className="column-receptionist">
          {pageActive === 'Cadastro' ?
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