import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className='kasa-header'>
          <img src={logo} alt='logo-kasa' className='kasa-logo'/>
          <nav className='kasa-nav'>
            <NavLink exact to="/" className='navlink' activeClassName="selected">ACCUEIL</NavLink>
            <NavLink to="/a_propos" className='navlink' activeClassName="selected">A PROPOS</NavLink>
          </nav>
        </div>
      );
    }
}

export default Header
