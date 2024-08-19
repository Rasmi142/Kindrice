import React from 'react';
import { assets } from '../../assets/assets';
import './Herosection.css';

export default function Herosection() {
  return (
    <section className='hero-section'>
      <div className="background-outer-layer">
        <div className="inner-layer">
          <div className="assets">
          <img src={assets.outdoor} alt=''/>
          </div>
          <div className="content-overlay">
            <h1>Kind low-GI Rice
                <br/>
                So Clean. So Tasty. So Healthy.
            </h1>
          </div>
        </div>
       
      </div>
      <div className='second-section'>
        <img src={assets.Home2} alt='home2'/>
      </div>
    </section>
  );
}
