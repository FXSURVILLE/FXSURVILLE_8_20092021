import React from 'react';
import homeHeader from '../assets/home_header.png'
// import backgroundCard from '../assets/background_card.png'
import Card from './Card';
import '../styles/Home.css'

const logements = require('../datas/logements.json')

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
                <ul id='card_wrap'>
                    {logements.map((logement)=>
                    <li key={logement.id} className='card_item'>
                        <Card logement={logement} />
                    </li>
                    )}
                </ul>
            </div>
        </div>
      );
    }
}

export default Home