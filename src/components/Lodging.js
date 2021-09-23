import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/Lodging.css'


class Lodging extends React.Component {
    render() {
      return (
        <div id='lodging_body'>
            <div className='lodging_picture'>
                <div className='picture'></div>
            </div>
            <div id='lodging_infos'>
                <div>
                    <h2>Detail</h2>
                    <p>Ville</p>
                    <div id='lodging_tags'>
                        <div className='lodging_tag'>tag1
                        </div>
                        <div className='lodging_tag'>tag2
                        </div>
                        <div className='lodging_tag'>tag3
                        </div>
                    </div>
                </div>
                <div id='lodging_rate'>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} className='grey' />
                        <FontAwesomeIcon icon={faStar} className='grey' />
                    </div>
                    <div className='lodging_host'>
                        <div className='host_identity'>nom
                        </div>
                        <div className='host_picture'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='infos'>
                <div className='dropdown description'>
                    <p>Description</p>
                    <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                </div>
                <div className='dropdown equipement'>
                    <p>Equipement</p>
                    <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                </div>
            </div>
        </div>
      );
    }
}

export default Lodging