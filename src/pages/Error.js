import React from 'react';
import '../styles/Error.css'

class Error extends React.Component {
    render() {
      return (
        <div className='kasa-error'>
          <p className='kasa-error-404'>404</p>
          <p className='kasa-error-message'>Oups! La page que vous demandez n'existe pas.</p>
          <p className='kasa-error-return'>Retourner sur la page d’accueil</p>
        </div>
      );
    }
}

export default Error