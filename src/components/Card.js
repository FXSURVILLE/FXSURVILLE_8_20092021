import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Card.css'


class Card extends React.Component {
    
    render (){
        return (
            <Link className='card_link' key={this.props.logement.id}  to={{
                pathname : `/logement/${this.props.logement.id}`
                }}>
                <img src={this.props.logement.cover} alt='card-img' className='card_img'/>
                <div className='faded'></div>
                <h2 className='card_name'>{this.props.logement.title}</h2>
            </Link>
        )
    }
}
export default Card