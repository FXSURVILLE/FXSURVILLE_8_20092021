import React from 'react';
import { withRouter } from "react-router";
import {ReactComponent as Chevron} from '../assets/chevron.svg'
import '../styles/Carousel.css'


class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.picturesList = this.props.pictures
      this.length = this.props.pictures.length
      this.state = {
        currentID: 0
      };
      this.clickLast = this.clickLast.bind(this);
      this.clickNext = this.clickNext.bind(this);
    }
    clickLast() {
        let last=this.state.currentID
        if(this.state.currentID === 0) {
            last = this.length-1
        } else {--last}
        
        this.setState( {
            currentID: last
        });
    }
    clickNext() {
        let next=this.state.currentID
        if(next < this.length-1) {
            ++next
        } else {next=0}
        
        this.setState ({
            currentID: next
        });
    }

    render () {
        let position = (this.state.currentID+1)+"/"+this.length
        return (
            <div className='carousel'>
                <img className='carousel_picture' alt="carousel_picture'" src={this.picturesList[this.state.currentID]}></img>
                <Chevron className='chevron_l'  transform="rotate(-90)" style={this.length === 1 ? { display: 'none' } : {}} onClick={this.clickLast}/>
                <Chevron className='chevron_r'  transform="rotate(90)" style={this.length === 1 ? { display: 'none' } : {}} onClick={this.clickNext}/>
                <div className='carousel_postition' >{position}</div>
            </div>
        )
    }    
}
export default withRouter(Carousel)
