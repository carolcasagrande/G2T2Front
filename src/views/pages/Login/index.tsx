import React, {  useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Lottie from 'react-lottie';
import './style.css'
import api from '../../../service/api';
import lottieLogin from '../../../assets/animation/lottie.json'

const Login: React.FC = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const animationContent = {
    loop: true,
    autoplay: true,
    animationData: lottieLogin
  }

  
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
        <div className="container-login">
    
        <div className="form-content-login">
          <aside>
            <Lottie 
              options={animationContent}
              width={400}
              height={400}
            />
          </aside>
          <form  onSubmit={handleLogin} className="form-login  ">
            <h1>Faça seu Login</h1>
            <input type="text" id="login" placeholder="Digite o seu login" value={login} onChange={(e) => setLogin(e.target.value)} required />
            <input type="password" id="senha" placeholder="Digite sua senha"  value={password} onChange={(e) => setPassword(e.target.value)} required  />
            <button type="submit">Acessar <FiArrowRight size={25} /></button>
          </form>
        </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
