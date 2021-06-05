import React from 'react';
import logo from '../../../img/logo.png';
import login from '../../../img/atend.jpg';
import { Container } from '../Login/style'
import { FormContent } from '../Login/style'
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import '../Login/style'

const Login: React.FC = () =>{
  return (
    <div className="App">
      <body>
      <Container>
        <header className="App-header">        
          <a className="App-link" href="/" target="_blank">
              <img src={logo} className="App-logo" alt="logo" />
          </a>              
        </header>     
        <main>   
        <aside className="aside">
          <img src={login} className="img-login" alt="login" />
        </aside>
        <FormContent>
          <form /* onSubmit={handleLogin} */ className="form-login  ">
            <h1>Faça seu Login</h1>
            <input type="text" id="name" placeholder="Digite o seu nome completo" /* value={login} onChange={(e) => setLogin(e.target.value)} required */ />
            <input type="text" id="login" placeholder="Digite o seu login" /* value={password} onChange={(e) => setPassword(e.target.value)} required */ />
            <input type="password" id="senha" placeholder="Digite sua senha" /* value={password} onChange={(e) => setPassword(e.target.value)} required  *//>
            <button type="submit">Acessar <FiArrowRight size={25} /></button>
          </form>
        </FormContent>
        </main>
        <footer className="footer">
          <p> Curso Gama&Afya - Desenvolvido por G2T2 | Ariele, Caroline e Fernando </p>
        </footer>
        </Container>
      </body>
    </div>
  );
}

export default Login;
