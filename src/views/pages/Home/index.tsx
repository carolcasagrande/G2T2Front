import React from 'react';

import HomeHeader from '../../../components/Home-header';

import './styles.css';

const Home: React.FC = () =>(
  <div className="container container-home">
    <div className="row dashboard">
      

      <div className="column">
        <HomeHeader title='Pacientes na fila de espera' />
        <div>
        </div>
      </div>

      <div className="column">
        <HomeHeader title='prontuário de atendimento'/>
        <div>
        </div>
      </div>
    
    
    </div>
  </div>
);

export default Home;