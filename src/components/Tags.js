import React from 'react';
import { withRouter } from "react-router";
import '../styles/Stars.css'


class Tags extends React.Component {
    render () {
        const equipments = this.props.equipments
        return (
            <ul id='lodging_tags'>
            {equipments.map((e) => 
                <li key={e} className='lodging_tag'>{e}
                </li>
            )}
            </ul>
        )
    }    
}
export default withRouter(Tags)