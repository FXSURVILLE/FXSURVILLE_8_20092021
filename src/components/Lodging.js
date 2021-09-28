import React from 'react';
// import PropTypes from "prop-types";
import { withRouter } from "react-router";
// import Star from '../assets/star.svg'
import {ReactComponent as Chevron} from '../assets/chevron.svg'
import Carousel from './Carousel';
import Stars from './Stars';
import Tags from './Tags';
import Dropdown from './Dropdown';
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
                // console.log(logement)
            }
        return this.logement
        })
    }
 
    render() {
    //     const { match, location } = this.props;
    //     console.log(this.props)
    // console.log(match.params.id)
        // return <div>You are now at {location.pathname}</div>;
        return (
            <div id='lodging_body'>
                <div className='lodging_picture'>
                    {/* <div className='picture'></div> */}
                    <Carousel pictures={this.logement.pictures}/>
                </div>
                <div id='lodging_infos'>
                    <div>
                        <h2>{this.logement.title}</h2>
                        <p>{this.logement.location}</p>
                        <Tags equipments={this.logement.equipments}/>
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
                    <Dropdown name="Description"  text={this.logement.description}/>
                    <Dropdown name="Equipement"  text={this.logement.equipments}/>
                </div>
            </div>
          );
    }
}
export default withRouter(Logement)
