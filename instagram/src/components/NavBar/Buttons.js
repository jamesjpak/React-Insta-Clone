import React from "react";
import './Buttons.css'

function Buttons(props) {
  return (
    <div className='button-layout'>

    <div className='button-style'>
      <i className="far fa-compass"></i> 
    </div>

    <div className='button-style'>
      <i className="far fa-heart"></i> 
    </div>

    <div className='button-style'>
      <i className="far fa-user"></i>
    </div>

    </div>
  );
}

export default Buttons;