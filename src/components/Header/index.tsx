import React from 'react';

import HeaderLinks from '../Header-links';

import logo from '../../img/logo.png';
import voltar from '../../img/voltar.png';

import './styles.css'

const Header: React.FC = () => (
  <header className="header">  
    <div className="header-logo">      
      <a className="home-link" href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>   
    </div> 
    <div>
      <HeaderLinks />
    </div>         
    <div className="back-page" >
      <a href="/"> <img src={voltar} className="voltar" alt="voltar" /></a>
    </div>   
  </header>  
);

export default Header;
