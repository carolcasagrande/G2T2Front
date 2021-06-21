import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { logoutCurrentUser } from '../../redux/user/user.action.js'

import './styles.css';

const Navbar: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutCurrentUser())
    localStorage.setItem('@tokenMaisha', '' )
    history.push('/')
  }

  return (
      <div className="side-navbar-container">
        <nav className="menu-lateral">
          {children}
          <div className='btn-logout' onClick={handleLogout}> Log out </div>
        </nav>
      </div>

    );
}

export default Navbar;