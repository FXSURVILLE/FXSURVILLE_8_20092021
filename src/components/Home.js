import React from 'react';
import homeHeader from '../assets/home_header.png'
import '../styles/Home.css'

class Home extends React.Component {
    render() {
      return (
        <div id='home_body'>
            <img src={homeHeader} alt='home_header' className='home_header'/>
            <div id='card_body'>
                <div id='card_wrap'>
                    <div className='card_link'>
                        <h2>Titre de la location</h2>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Home