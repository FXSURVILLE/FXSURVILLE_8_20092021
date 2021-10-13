import React from 'react';
import { withRouter } from "react-router";
import {ReactComponent as Chevron} from '../assets/chevron.svg'
import '../styles/Collapse.css'


class Collapse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden: 1
      };
      this.collapse = this.collapse.bind(this);
    }
    collapse() {
        let switchView = this.state.hidden
        if (switchView === 0) {
            switchView = 1
        } else {switchView = 0}
        this.setState ({
            hidden: switchView
        });
    }

    render () {
        return (
            <div className='collapses'>
                <div className='collapse_info'>
                    <p>{this.props.name}</p>
                    <Chevron className='collapse_chevron' transform={this.state.hidden === 0 ? "" : "rotate(180)"} onClick={this.collapse}/>
                </div>
                <ul className='text_collapse' style={this.state.hidden === 0 ? {} : { display: 'none' }}>
                    {Array.isArray(this.props.text) ? (
                    this.props.text.map((e) => 
                        <li key={e}>{e}</li>
                    )) : (<li>{this.props.text}</li>)
                    }
                </ul>
            </div>
        )
    }    
}
export default withRouter(Collapse)