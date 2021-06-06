import React from 'react';
import logo from '../../../img/logo.png';
import github from '../../../img/github.png';
import linkedin from '../../../img/linkedin.png';
import login from '../../../img/atend.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './style.css'

const Login: React.FC = () =>{
  return (
    <div className="login">
      <body>
      <div className="container">
        <header className="header">        
          <a className="home-link" href="/" target="_blank">
              <img src={logo} className="logo" alt="logo" />
          </a>              
        </header>     
        <main>   
        <aside className="aside-left">
          <img src={login} className="img-login" alt="login" />
        </aside>
        <aside className="aside-right">
          <div className="form-content">
            <form /* onSubmit={handleLogin} */ className="form-login  ">
              <h1>Faça seu Login</h1>
              <input type="text" id="name" placeholder="Digite o seu nome completo" /* value={login} onChange={(e) => setLogin(e.target.value)} required */ />
              <input type="text" id="login" placeholder="Digite o seu login" /* value={password} onChange={(e) => setPassword(e.target.value)} required */ />
              <input type="password" id="senha" placeholder="Digite sua senha" /* value={password} onChange={(e) => setPassword(e.target.value)} required  *//>
              <button type="submit">Acessar <FiArrowRight size={25} /></button>
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

export default Login;
