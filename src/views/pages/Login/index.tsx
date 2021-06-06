import React from 'react';
import logo from '../../../img/logo.png';
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
          <p> Curso Gama&Afya - Desenvolvido por G2T2 | André, Ariele, Caroline e Fernando </p>
        </footer>
        </div>
      </body>
    </div>
  );
}

export default Login;
