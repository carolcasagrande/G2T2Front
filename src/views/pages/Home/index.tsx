import React from 'react';
import logo from '../../../img/logo.png';
/* import home from '../../../img/atend2.jpg'; */
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './style.css'

const Home: React.FC = () =>{
  return (
    <div className="home">
      <body>
      <div className="container">
        <header className="header">        
          <a className="home-link" href="/" target="_blank">
              <img src={logo} className="logo" alt="logo" />
          </a>              
        </header>     
        <main>   
        {/* <aside className="aside">
          <img src={home} className="img-home" alt="home" />
        </aside> */}
        <div className="form-content">
          <form /* onSubmit={handleLogin} */ className="form-home">
            <h1>Faça seu Login</h1>
            <input type="text" id="name" placeholder="Digite o seu nome completo" /* value={login} onChange={(e) => setLogin(e.target.value)} required */ />
            <input type="text" id="login" placeholder="Digite o seu login" /* value={password} onChange={(e) => setPassword(e.target.value)} required */ />
            <input type="password" id="senha" placeholder="Digite sua senha" /* value={password} onChange={(e) => setPassword(e.target.value)} required  *//>
            <button type="submit">Acessar <FiArrowRight size={25} /></button>
          </form>
        </div>
        </main>
        <footer className="footer">
          <p> Curso Gama&Afya - Desenvolvido por G2T2 | Ariele, Caroline e Fernando </p>
        </footer>
        </div>
      </body>
    </div>
  );
}

export default Home;