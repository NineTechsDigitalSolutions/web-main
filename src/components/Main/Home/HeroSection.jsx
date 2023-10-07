import React from 'react';

import { phone_1, phone_2 } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='hero-section' id='hero'>
      <div className='container'>
        <div class='row align-items-center'>
          <div class='col-12 hero-text-image'>
            <div class='row'>
              <div class='col-lg-8 text-center text-lg-start'>
                <h1 data-aos='fade-right'>Welcome to My Library</h1>
                <p class='mb-5' data-aos='fade-right' data-aos-delay='100'>
                  Entire world is on your pocket now!
                </p>
                <p
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-offset='-500'
                >
                  <a href='#' class='btn btn-outline-white'>
                    Get started
                  </a>
                </p>
              </div>
              <div class='col-lg-4 iphone-wrap'>
                <img
                  src={phone_1}
                  alt=''
                  class='phone-1'
                  data-aos='fade-right'
                />
                <img
                  src={phone_2}
                  alt=''
                  class='phone-2'
                  data-aos='fade-right'
                  data-aos-delay='200'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
