import React from 'react';
import AproposHeader from '../assets/mountain_lr.png'
import { ReactComponent as Chevron } from '../assets/chevron.svg'
import '../styles/APropos.css'

class APropos extends React.Component {
    render() {
      return (
        <div>
            <div id='A_propos_box'>
                <img src={AproposHeader} alt='A_propos_header' className='A_propos_header'/>
                <div className='darken'></div>
            </div>
            <div id='a_propos_body'>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Fiabilité</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Respect</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Service</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
              </div>
              <div className='Apropos_dropdowns'>
                <div className='Apropos_info'>
                  <p>Sécurité</p>
                  <Chevron className='Apropos_chevron' />
                </div>
                <p className='text_dropdown'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </div>
                {/* <div id='fiability' className='Apropos_info'>
                  <p>Fiabilité</p>
                  <Chevron className='chevron' />
                </div>
                <div id='respect' className='Apropos_info'>
                  <p>Respect</p>
                  <Chevron className='chevron' />
                </div>
                <div id='service' className='Apropos_info'>
                  <p>Service</p>
                  <Chevron className='chevron' />
                </div>
                <div id='responsability' className='Apropos_info'>
                  <p>Sécurité</p>
                  <Chevron className='chevron' />
                </div> */}
            </div>
        </div>
      );
    }
}

export default APropos