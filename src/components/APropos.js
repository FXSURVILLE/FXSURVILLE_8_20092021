import React from 'react';
import AproposHeader from '../assets/mountain_lr.png'
import Dropdown from './Dropdown';
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
                <Dropdown name="Fiabilité"  text={aProposText.fiabilité}/>
              </div>
              <div className='Apropos_dropdowns'>
                <Dropdown name="Respect"  text={aProposText.respect}/>
              </div>
              <div className='Apropos_dropdowns'>
                <Dropdown name="Service"  text={aProposText.service}/>
              </div>
              <div className='Apropos_dropdowns'>
                <Dropdown name="Sécurité"  text={aProposText.securité}/>
              </div>
            </div>
        </div>
      );
    }
}

export default APropos