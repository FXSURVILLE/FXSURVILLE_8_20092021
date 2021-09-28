import React from 'react';
// import PropTypes from "prop-types";
import { withRouter } from "react-router";
// import Star from '../assets/star.svg'
import {ReactComponent as Chevron} from '../assets/chevron.svg'
import Stars from './Stars';
import '../styles/Lodging.css'


const logements = require('../datas/logements.json')


class Logement extends React.Component {
    // static propTypes = {
    //   match: PropTypes.object.isRequired,
    //   location: PropTypes.object.isRequired,
    //   history: PropTypes.object.isRequired
    // };
    constructor(props){
        super(props)
        this.id = this.props.match.params.id
        // this._queryRent = this._queryRent.bind(this)
        // this.rent = {} 
        this.recherche()
    }
    recherche(){
        logements.map((logement)=>{
            if (logement.id === this.id ){
                this.logement = logement
                console.log(logement)
            }
        return this.logement
        })
    }
//     constructor() {
//         super(props)
//         this.id = this.props.id
//         this.rating = this.props.rating
//         const range = [1, 2, 3, 4, 5]        
//     }
 
    render() {
    //     const { match, location } = this.props;
    //     console.log(this.props)
    // console.log(match.params.id)
        // return <div>You are now at {location.pathname}</div>;
        return (
            <div id='lodging_body'>
                <div className='lodging_picture'>
                    <div className='picture'></div>
                </div>
                <div id='lodging_infos'>
                    <div>
                        <h2>{this.logement.title}</h2>
                        <p>{this.logement.location}</p>
                        <div id='lodging_tags'>
                            <div className='lodging_tag'>tag1
                            </div>
                            <div className='lodging_tag'>tag2
                            </div>
                            <div className='lodging_tag'>tag3
                            </div>
                        </div>
                    </div>
                    <div id='lodging_rate'>
                        <Stars rating={this.logement.rating}/>
                        <div className='lodging_host'>
                            <div className='host_identity'>{this.logement.host.name}
                            </div>
                            <img className='host_picture' alt="host_picture'" src={this.logement.host.picture}>
                            </img>
                        </div>
                    </div>
                </div>
                <div className='infos'>
                    <div className='dropdowns'>
                        <div className='dropdown description'>
                            <p>Description</p>
                            <Chevron className='chevron' />
                        </div>
                        <p className='text_dropdown'>{this.logement.description}</p>
                    </div>
                    <div className='dropdowns'>
                        <div className='dropdown equipement'>
                            <p>Equipement</p>
                            <Chevron className='chevron' />
                        </div>
                        <p className='text_dropdown'>{this.logement.equipments}</p>
                    </div>
                </div>
            </div>
          );
    }
}
export default withRouter(Logement)
