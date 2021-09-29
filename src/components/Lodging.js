import React from 'react';
import { withRouter } from "react-router";
import Carousel from './Carousel';
import Stars from './Stars';
import Tags from './Tags';
import Dropdown from './Dropdown';
import '../styles/Lodging.css'


const logements = require('../datas/logements.json')


class Logement extends React.Component {
    constructor(props){
        super(props)
        this.id = this.props.match.params.id
        this.recherche()
    }
    recherche(){
        logements.map((logement)=>{
            if (logement.id === this.id ){
                this.logement = logement
            }
        return this.logement
        })
    }
 
    render() {
        return (
            <div id='lodging_body'>
                <div className='lodging_picture'>
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
