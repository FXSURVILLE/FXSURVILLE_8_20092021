import React from 'react';
import { withRouter } from "react-router";
import {ReactComponent as Star} from '../assets/star.svg'
import '../styles/Stars.css'


class Stars extends React.Component {
    render () {
        const range = [1, 2, 3, 4, 5]
        return (
            <div className='stars'>
            {range.map((e) => this.props.rating >= e ? 
                <Star className='star' /> : 
                <Star className='star grey' />)}
            </div>
        )
    }    
}
export default withRouter(Stars)