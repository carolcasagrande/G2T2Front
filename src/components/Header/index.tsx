import React from 'react';
import ImgLogin from '../../img/logo-maisha.png'
import './styles.css'

const Header: React.FC = () => (
  <header className="header">  
    <div className="header-logo">      
      <a className="home-link" href="/">
        <div className='logo'>
          <img src={ImgLogin} alt="logo" />
        </div>
      </a>   
    </div>          
  </header>  
);

export default Header;
