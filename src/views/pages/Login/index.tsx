import React, {  useState, useEffect } from 'react';
import loginImg from '../../../img/atend.jpg';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import './style.css'
import api from '../../../service/api';

const Login: React.FC = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
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
            <img src={loginImg} className="img-login" alt="login" />
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
        </div>
      </body>
    </div>
  );
}

export default Login;
