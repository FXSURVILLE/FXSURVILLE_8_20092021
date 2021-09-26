import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className='kasa-header'>
          <img src={logo} alt='logo-kasa' className='kasa-logo'/>
          <nav className='kasa-nav'>
            <Link to="/">ACCUEIL</Link>
            <Link to="/a_propos">A PROPOS</Link>
          </nav>
        </div>
      );
    }
}

export default Header
