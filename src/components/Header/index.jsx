import React from 'react';

import logo from '../../img/logo.png';
import voltar from '../../img/voltar.png';

import './styles.css'

const Header = () => (
  <header className="header">  
    <div className="header-logo">      
      <a className="home-link" href="/" target="_blank">
        <img src={logo} className="logo" alt="logo" />
      </a>   
    </div> 
    <nav className="menu" >
      <a href="/"> <img src={voltar} className="voltar" alt="voltar" /></a>
    </nav>            
  </header>  
);

export default Header;