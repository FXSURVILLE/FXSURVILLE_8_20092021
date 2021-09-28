import React from 'react';
import { withRouter } from "react-router";
import {ReactComponent as Star} from '../assets/star.svg'
import '../styles/Tags.css'


class Stars extends React.Component {
    render () {
        const range = [1, 2, 3, 4, 5]
        return (
            <div className='stars'>
            {range.map((e) => this.props.rating >= e ? 
                <Star key={e} className='star' /> : 
                <Star key={e} className='star grey' />)}
            </div>
        )
    }    
}
export default withRouter(Stars)