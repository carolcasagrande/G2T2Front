import React from 'react';
import './styles.css';

const Navbar: React.FC = ({children}) => {
  return (
      <div className="side-navbar-container">
        <nav className="menu-lateral">
          {children}
        </nav>
      </div>

    );
}

export default Navbar;