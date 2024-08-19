import React from 'react';
import './HealthyPartner.css';
import { assets } from '../../assets/assets';

export default function HealthyPartner() {
  return (
    <section className='healthy-section'>
      <div className="content-container">
        <div className="heading-container">
          <h1 className='bold'>Health Partner.</h1>
          <h2 className='medium'>Incredibly Low-GI.</h2>
        </div>
        <div className="consultation-container">
          <div className="info">
            <h2>Manages <span>blood sugar</span> level effectively.</h2>
            <p><i>Click for Lab report</i></p>
          </div>
          <div className="patient-image">
            <img src={assets.patient} alt='Patient' />
          </div>
        </div>
      </div>
    </section>
  );
}
