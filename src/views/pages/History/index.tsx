import React from 'react';
import logo from '../../../img/logo.png';
import github from '../../../img/github.png';
import linkedin from '../../../img/linkedin.png';
import voltar from '../../../img/voltar.png';
import history from '../../../img/historico.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"

const History: React.FC = () =>{
  return (
    <div className="history">
      <body>
      <div className="container">
        <header className="header">        
          <a className="home-link" href="/" target="_blank">
              <img src={logo} className="logo" alt="logo" />
          </a>  
          <nav className="menu" >
                <a href="/"> <img src={voltar} className="voltar" alt="voltar" /></a>
          </nav>               
        </header>     
        <main>   
          <aside className="aside-left">
            <img src={history} className="img-history" alt="Histórico de Atendimentos" />
          </aside>
          <aside className="aside-right">
            <div className="form-content">
              <form /* onSubmit={handleLogin} */ className="form-history">
                <h1>Histórico dos Atendimentos</h1>
                <div className="data-history">                    
                        <div className="date-time">
                            <input type="date" id="date" placeholder="Data:" /* value={date} onChange={(e) => setLogin(e.target.value)} required */ />
                            <input type="time" id="time" placeholder="Hora:" /* value={time} onChange={(e) => setLogin(e.target.value)} required */ />
                        </div>      
                        <input type="text" id="specialist"  className="input-full" placeholder="Especialista" /* value={specialist} onChange={(e) => setLogin(e.target.value)} required */ />
                          
                        <textarea name="description" className="description" placeholder="Descrição:" id="description" cols={66} rows={24}></textarea>      
                </div>         
                <button type="submit">Registrar <FiArrowRight size={25} /></button>
              </form>
            </div>
          </aside>
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

export default History;
