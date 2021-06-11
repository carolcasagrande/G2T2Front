import React from 'react';
import patient from '../../../img/user.png';
import specialist from '../../../img/users.png';
import occupation from '../../../img/medico.png';
import calendar from '../../../img/calendar.png';
import prontuario from '../../../img/prontuario.png';
import historico from '../../../img/historicomed.png';
/* import user from '../../../img/user.svg'; */
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './styles.css';

const Home: React.FC = () =>{
  return (
    <div className="home">
      <body>
        <div className="container">    
          <main>   
            <div className="container-geral">
              <section id="Skills" className="skills">
              {/* <h2>Skills</h2> */}

                <div className="container-card">
                  <div className="polaroid">
                    <figure>
                      <a href="/patient"><img src={patient} className="card-img" alt="cadastro de paciente" /><figcaption>Cadastro de Paciente</figcaption></a>
                    </figure>
                  </div>
                  <div className="polaroid">
                    <figure>
                      <a href="/specialist"><img src={specialist} className="card-img-users" alt="cadastro de Especialista" /><figcaption>Cadastro de Especialista</figcaption></a>
                    </figure>
                  </div>
                  <div className="polaroid">
                    <figure>
                      <a href="/occupation"> <img src={occupation} className="card-img" alt="cadastro de Profissão" /><figcaption>Cadastro Profissão</figcaption></a>
                    </figure>
                  </div>
                </div>
                <div className="container-card">
                  <div className="polaroid">
                    <figure>
                      <a href="/calls"><img src={calendar} className="card-img" alt="Atendimento"/><figcaption>Atendimento</figcaption></a>
                    </figure>
                  </div>
                  <div className="polaroid">
                    <figure>
                      <a href="/record"><img src={prontuario} className="card-img" alt="Prontuário" /><figcaption>Prontuário</figcaption></a>                
                    </figure>
                  </div>
                  <div className="polaroid">
                    <figure>
                      <a href="/history"> <img src={historico} className="card-img" alt="Histórico" /><figcaption>Histórico</figcaption></a>                
                    </figure>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export default Home;