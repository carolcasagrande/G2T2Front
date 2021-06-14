import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

import HomeHeader from '../../../components/Home-header';
import PatientsWaiting from '../../../components/Patients-waiting';

import './styles.css';

const Home: React.FC = () => {

  useEffect(() => {
    const pusher = new Pusher('cde1c800fa96905d8626', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('checkins');
    channel.bind('inserted', (data: any) => {
      alert(JSON.stringify(data));
    }); 
  }, [])
  
  return(
    <div className="container container-home">
      <div className="row dashboard">
        
        <div className="column">
          <HomeHeader title='Pacientes na fila de espera' />
          <PatientsWaiting />
        </div>
        <div className="column">
          <HomeHeader title='prontuário de atendimento' />
          <div> Prontuário para editar </div>
        </div>

      </div>
    </div>
  )
};

export default Home;