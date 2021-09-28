import React from 'react';
import { withRouter } from "react-router";
import {ReactComponent as Chevron} from '../assets/chevron.svg'
import '../styles/Dropdown.css'


class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden: 1
      };
      this.dropDown = this.dropDown.bind(this);
    }
    dropDown() {
        let switchView = this.state.hidden
        // console.log(switchView)
        if (switchView === 0) {
            switchView = 1
        } else {switchView = 0}
        // console.log(switchView)
        this.setState ({
            hidden: switchView
        });
    }

    render () {
        const test=this.props.text
        console.log(test)
        // const azer = test.map((e) => e)
        // console.log(azer)
        return (
            <div className='dropdowns'>
                <div className='dropdown_info'>
                    <p>{this.props.name}</p>
                    <Chevron className='dropdown_chevron' transform={this.state.hidden === 0 ? "" : "rotate(180)"} onClick={this.dropDown}/>
                </div>
                <ul className='text_dropdown' style={this.state.hidden === 0 ? {} : { display: 'none' }}>
                    {this.props.text}
                    {/* {test.forEach((e) => 
                        <li key={e}>{e}</li>
                    )} */}
                </ul>
            </div>
        )
    }    
}
export default withRouter(Dropdown)