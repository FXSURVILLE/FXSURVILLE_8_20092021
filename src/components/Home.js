import React from 'react';
import homeHeader from '../assets/home_header.png'
import backgroundCard from '../assets/background_card.png'
import '../styles/Home.css'

class Home extends React.Component {
    render() {
      return (
        <div id='home_body'>
            <div className='home_header'>
                <img src={homeHeader} alt='home_header'/>
                <div className='darken'></div>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div id='card_body'>
                <div id='card_wrap'>
                    <div className='card_link'>
                        <img src={backgroundCard} alt='background_card'/>
                        <div className='faded'></div>
                        <h2>Titre de la location</h2>
                    </div>
                    <div className='card_link'>
                        <img src={backgroundCard} alt='background_card'/>
                        <div className='faded'></div>
                        <h2>Titre de la location</h2>
                    </div>
                    <div className='card_link'>
                        <img src={backgroundCard} alt='background_card'/>
                        <div className='faded'></div>
                        <h2>Titre de la location</h2>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Home