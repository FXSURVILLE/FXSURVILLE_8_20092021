import React from 'react';
import AproposHeader from '../assets/mountain_lr.png'
import '../styles/APropos.css'

class APropos extends React.Component {
    render() {
      return (
        <div>
            <div id='A_propos_box'>
                <img src={AproposHeader} alt='A_propos_header' className='A_propos_header'/>
                <div class="parent">
                    <div class="child1"></div>
                    <div class="child1 child2"></div>
                </div>
            </div>
            <div id='a_propos_body'>
                <div id='fiability'>
                </div>
                <div id='respect'>
                </div>
                <div id='service'>
                </div>
                <div id='responsability'>
                </div>
            </div>
        </div>
      );
    }
}

export default APropos