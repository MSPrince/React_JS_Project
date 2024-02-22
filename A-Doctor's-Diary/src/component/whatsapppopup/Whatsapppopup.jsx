import React from 'react';
import './Whatsapppopup.css'
import whatsapp from '../../assets/images/whatsapp/whatsapp.png';

function Whatsapppopup() {
  return (
    <>
      <div className="hh">
        <a href="https://wa.link/94e62n">
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </>
  );
}

export default Whatsapppopup