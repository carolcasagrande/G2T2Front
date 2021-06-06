import React from 'react';
import logo from '../../../img/logo.png';
import github from '../../../img/github.png';
import linkedin from '../../../img/linkedin.png';
import patient from '../../../img/user.png';
import specialist from '../../../img/users.png';
import occupation from '../../../img/medico.png';
import calendar from '../../../img/calendar.png';
import prontuario from '../../../img/prontuario.png';
import historico from '../../../img/historicomed.png';
import voltar from '../../../img/voltar.png';
/* import user from '../../../img/user.svg'; */
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './styles.css';

const Home: React.FC = () =>{
  return (
    <div className="home">
      <body>
      <div className="container">
        <header className="header">    
            <div className="header-logo">    
                <a className="home-link" href="/" target="_blank">
                    <img src={logo} className="logo" alt="logo" />
                </a>    
            </div>    
            {/* <nav className="menu">
              <ul>
                <li><a href="/patient">Cadastro Paciente <img src={patient} className="patient-nav" alt="cadastro de paciente" /> </a></li>
                <li><a href="/specialist">Cadastro Especialista <img src={specialist} className="logo" alt="cadastro de Especialista" /></a></li>
                <li><a href="/occupation">Cadastro Profissão <img src={occupation} className="logo" alt="cadastro de Profissão" /></a></li>
                <li><a href="/calls">Atendimento <img src={calendar} className="logo" alt="Atendimento" /></a></li>
                <li><a href="/record">Prontuário <img src={prontuario} className="logo" alt="Prontuário" /></a></li>
                <li><a href="/history">Histórico <img src={historico} className="logo" alt="Histórico" /></a></li>
                <li><a href="/history">Voltar <img src={voltar} className="logo" alt="Histórico" /></a></li>
              </ul>
            </nav>   */}
        </header>     
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
        <footer className="footer">
          <p>Curso Gama & Afya - Desenvolvido por G2T2</p>
          <section className="redesocial">
            <div className="contato">
              <p>Andre</p>
              <a target="_blank" href="https://github.com/andreludwig">
                <img src={github} alt="logo github" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/andr%C3%A9-ludwig-67b17414a/">
                <img src={linkedin} alt="logo linkedin" />
              </a>        
            </div>
            <div className="contato">
              <p>Ariele</p>
              <a target="_blank" href="https://github.com/ArieleM">
                <img src={github} alt="logo github" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/pereiramendonca/">
                <img src={linkedin} alt="logo linkedin" />
              </a>              
            </div>
            <div className="contato">
              <p>Caroline</p>
             <a target="_blank" href="https://github.com/carolcasagrande">
                <img src={github} alt="logo github" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/carolinecasagrande">
                <img src={linkedin} alt="logo linkedin" />
              </a>              
            </div>
            <div className="contato">
              <p>Fernando</p>
              <a target="_blank" href="https://github.com/ofernandovegano">
                <img src={github} alt="logo github" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/fernandogomesrodrigues/">
                <img src={linkedin} alt="logo linkedin" />
              </a>      
            </div>
            </section> 
        </footer>
        </div>
      </body>
    </div>
  );
}

export default Home;