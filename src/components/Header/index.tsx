import React from 'react';

import './styles.css'

const Header: React.FC = () => (
  <header className="header">  
    <div className="header-logo">      
      <a className="home-link" href="/">
        <div className='logo'>Maisha</div>
      </a>   
    </div>          
  </header>  
);

export default Header;
