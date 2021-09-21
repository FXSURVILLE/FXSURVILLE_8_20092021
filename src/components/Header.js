import React from 'react';
import logo from '../assets/logo.png'
import '../styles/Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className='kasa-header'>
          <img src={logo} alt='logo-kasa' className='kasa-logo'/>
          <nav className='kasa-nav'>
            <li>ACCUEIL</li>
            <li>A PROPOS</li>
          </nav>
        </div>
      );
    }
}

export default Header
