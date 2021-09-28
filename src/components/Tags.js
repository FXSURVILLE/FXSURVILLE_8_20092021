import React from 'react';
import { withRouter } from "react-router";
import '../styles/Stars.css'


class Tags extends React.Component {
    render () {
        const equipments = this.props.equipments
        return (
            <div id='lodging_tags'>
            {equipments.map((e) => 
                <div className='lodging_tag'>{e}
                </div>
            )}
            </div>
        )
    }    
}
export default withRouter(Tags)