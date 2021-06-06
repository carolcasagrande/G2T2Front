import React from 'react';
import logo from '../../../img/logo.png';
import github from '../../../img/github.png';
import linkedin from '../../../img/linkedin.png';
import voltar from '../../../img/voltar.png';
import patient from '../../../img/atend2.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import "./styles.css"

const Patient: React.FC = () =>{
  return (
    <div className="patient">
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
          <img src={patient} className="img-patient" alt="login" />
        </aside>
        <aside className="aside-right">
          <div className="form-content">
            <form /* onSubmit={handleLogin} */ className="form-patient  ">
              <h1>Cadastro | Paciente</h1>
              <div className="data-patient">
                  <input type="text" id="name" className="input-full" placeholder="Nome completo" /* value={name} onChange={(e) => setLogin(e.target.value)} required */ />
                  <div className="cpf-sangue">
                    <input type="text" id="cpf"  placeholder="CPF" /* value={cpf} onChange={(e) => setPassword(e.target.value)} required */ />
                    <input type="text" id="tiposangue"  placeholder="Tipo Sanguíneo" /* value={sangue} onChange={(e) => setPassword(e.target.value)} required  *//>
                  </div>
                  <div className="cel-tel">
                      <input type="text" id="tel" placeholder="Tel" /* value={tel} onChange={(e) => setPassword(e.target.value)} required  *//>
                      <input type="text" id="cel" placeholder="Cel" /* value={cel} onChange={(e) => setPassword(e.target.value)} required  *//>
                  </div>
                  <input type="email" id="email" className="input-full" placeholder="Email" /* value={email} onChange={(e) => setPassword(e.target.value)} required  *//>
                  
              </div>
              <h3>Endereço:</h3>
              <div className="adress">
                  <input type="text" id="cep" className="input-full" placeholder="CEP" /* value={cep} onChange={(e) => setLogin(e.target.value)} required */ />
                  <input type="text" id="logradouro" className="input-full" placeholder="Logradouro" /* value={logradouro} onChange={(e) => setPassword(e.target.value)} required */ />
                  <input type="text" id="num" placeholder="Número" /* value={num} onChange={(e) => setPassword(e.target.value)} required  *//>
                <div className="compl-bairro">
                    <input type="text" id="compl" placeholder="Compl" /* value={compl} onChange={(e) => setPassword(e.target.value)} required  *//>
                    <input type="text" id="bairro" placeholder="Bairro" /* value={bairro} onChange={(e) => setPassword(e.target.value)} required  *//>
                </div>
                <div className="city-uf">
                    <input type="text" id="cidade" placeholder="Cidade" /* value={password} onChange={(e) => setPassword(e.target.value)} required  *//>
                    <input type="text" id="uf" placeholder="UF" /* value={uf} onChange={(e) => setPassword(e.target.value)} required  *//>
                </div>
              </div>
              <button type="submit">Cadastrar <FiArrowRight size={25} /></button>
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

export default Patient;
