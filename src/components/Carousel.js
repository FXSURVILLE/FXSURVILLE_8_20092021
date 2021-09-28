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
        console.log("last")
        if(this.state.currentID === 0) {
            console.log(last)
            last = this.length-1
        } else {--last}
        
        console.log(last)
        this.setState( {
            currentID: last
        });
        console.log(this.setstate)
    }
    clickNext() {
        let next=this.state.currentID
        console.log("next")
        if(next < this.length-1) {
            console.log(next)
            ++next
        } else {next=0}
        
        console.log(next)
        this.setState ({
            currentID: next
        });
        console.log(this.setstate)
    }

    render () {
        let position = (this.state.currentID+1)+"/"+this.length
        console.log(position)
        return (
            <div className='carousel'>
                <img className='carousel_picture' alt="carousel_picture'" src={this.picturesList[this.state.currentID]}></img>
                <Chevron className='chevron_l'  transform="rotate(-90)" onClick={this.clickLast}/>
                <Chevron className='chevron_r'  transform="rotate(90)" onClick={this.clickNext}/>
                <div className='carousel_postition' >{position}</div>
            </div>
        )
    }    
}
export default withRouter(Carousel)
