import React from 'react';
import logo from '../assets/logo_footer.png'
import '../styles/Footer.css'


class Footer extends React.Component {
    render() {
        return (
          <div  className='kasa-footer'>
            <img src={logo} alt='logo-kasa'/>
            <p>© 2021 Kasa. All rights reserved</p>
          </div>
        );
      }
}

export default Footer