import React from 'react';
import { withRouter } from "react-router";
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import '../styles/Lodging.css'
import Error from '../pages/Error'


const logements = require('../datas/logements.json')


class Logement extends React.Component {
    constructor(props){
        super(props)
        this.logement = null
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
        if (this.logement === null) {
            return (
                <Error />
            )
        }
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
                    <Collapse name="Description"  text={this.logement.description}/>
                    <Collapse name="Equipement"  text={this.logement.equipments}/>
                </div>
            </div>
          );
    }
}
export default withRouter(Logement)
