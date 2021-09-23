import React from 'react';
import AproposHeader from '../assets/mountain_lr.png'
import '../styles/APropos.css'

class APropos extends React.Component {
    render() {
      return (
        <div>
            <div id='A_propos_box'>
                <img src={AproposHeader} alt='A_propos_header' className='A_propos_header'/>
                <div className='darken'></div>
            </div>
            <div id='a_propos_body'>
                <div id='fiability' className='Apropos_info'>
                <p>Fiabilité</p>
                </div>
                <div id='respect' className='Apropos_info'>
                <p>Respect</p>
                </div>
                <div id='service' className='Apropos_info'>
                <p>Service</p>
                </div>
                <div id='responsability' className='Apropos_info'>
                <p>Sécurité</p>
                </div>
            </div>
        </div>
      );
    }
}

export default APropos