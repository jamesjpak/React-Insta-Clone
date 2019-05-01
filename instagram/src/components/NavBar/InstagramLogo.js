import React from "react";
import './InstagramLogo.css';
import InstaLogo from '../../img/instagram.png';


function InstagramLogo(props) {
  return (
    <div className='logo-style'>

        <i className="fab fa-instagram" />
     
        <img className='word-logo' src= {InstaLogo} alt='top-logo' />
      
    </div>
  );
}

export default InstagramLogo;
