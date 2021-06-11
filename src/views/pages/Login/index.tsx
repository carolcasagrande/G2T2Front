import React from 'react';
import login from '../../../img/atend.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './style.css'
import api from '../../../service/api';

const Login: React.FC = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event:FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    const user = {
      login: login,
      password: password
    }

    api.post(`session`, user ).then(
      response => {
        localStorage.setItem('@tokenMaisha', response.data.token)
        console.log(response.data)
      }
    )
  }

  useEffect(() => {
    api.get('users').then(
      response => {
        console.log(response.data)
      }
    )
  },[] )

  return (
    <div className="login">
      <body>
      <div className="container">    
        <main>   
        <aside className="aside-left">
          <img src={login} className="img-login" alt="login" />
        </aside>
        <aside className="aside-right">
          <div className="form-content">
            <form  onSubmit={handleLogin} className="form-login  ">
              <h1>Faça seu Login</h1>
              <input type="text" id="login" placeholder="Digite o seu login" value={login} onChange={(e) => setLogin(e.target.value)} required />
              <input type="password" id="senha" placeholder="Digite sua senha"  value={password} onChange={(e) => setPassword(e.target.value)} required  />
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
