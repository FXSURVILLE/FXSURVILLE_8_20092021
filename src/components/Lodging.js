import React from 'react';
import { ReactComponent as Star } from '../assets/star.svg'
import { ReactComponent as Chevron } from '../assets/chevron.svg'
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
                        <Star className='star' />
                        <Star className='star' />
                        <Star className='star' />
                        <Star className='star grey' />
                        <Star className='star grey' />
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
                <div className='dropdowns'>
                    <div className='dropdown description'>
                        <p>Description</p>
                        <Chevron className='chevron' />
                    </div>
                    <p className='text_dropdown'>text</p>
                </div>
                <div className='dropdowns'>
                    <div className='dropdown equipement'>
                        <p>Equipement</p>
                        <Chevron className='chevron' />
                    </div>
                    <p className='text_dropdown'>text</p>
                </div>
            </div>
        </div>
      );
    }
}

export default Lodging