import React from 'react';
import { assets } from '../../assets/assets';
import './Herosection.css';

export default function Herosection() {
  return (
    <section className='hero-section'>
      <div className="background-outer-layer">
        <div className="inner-layer">
          <div className="assets">
            <ul>
              <li><img src={assets.vector} alt='vector-bg' className='vector'/></li>
              <li><img src={assets.girl} alt='girl' className='girl'/></li>
              <li><img src={assets.grass1} alt='grass1' className='grass1'/></li>
              <li><img src={assets.grass2} alt='grass2' className='grass2'/></li>
              <li><img src={assets.floor} alt='floor' className='floor'/></li>
            </ul>
          </div>
          <div className="content-overlay">
            <h1>Kind low-GI Rice
                <br/>
                So Clean. So Tasty. So Healthy.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
