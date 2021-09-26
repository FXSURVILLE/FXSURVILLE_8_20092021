import React from 'react';
import AproposHeader from '../assets/mountain_lr.png'
import { ReactComponent as Chevron } from '../assets/chevron.svg'
import '../styles/APropos.css'

const aProposText = require('../datas/a_propos_text.json')

class APropos extends React.Component {
    render() {
      return (
        <div>
            <div id='A_propos_box'>
                <img src={AproposHeader} alt='A_propos_header' className='A_propos_header'/>
                <div className='darken'></div>
            </div>
            <div id='a_propos_body'>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Fiabilité</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>{aProposText.fiabilité}</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Respect</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>{aProposText.respect}</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Service</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>{aProposText.service}</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Sécurité</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>{aProposText.securité}</p>
              </div>
                {/* <div id='fiability' className='Apropos_info'>
                  <p>Fiabilité</p>
                  <Chevron className='chevron' />
                </div>
                <div id='respect' className='Apropos_info'>
                  <p>Respect</p>
                  <Chevron className='chevron' />
                </div>
                <div id='service' className='Apropos_info'>
                  <p>Service</p>
                  <Chevron className='chevron' />
                </div>
                <div id='responsability' className='Apropos_info'>
                  <p>Sécurité</p>
                  <Chevron className='chevron' />
                </div> */}
            </div>
        </div>
      );
    }
}

export default APropos