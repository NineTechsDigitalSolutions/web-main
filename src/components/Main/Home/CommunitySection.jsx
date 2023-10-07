import React from 'react';

import { undraw_2, phone_2 } from '../../../assets';

const CommunitySection = () => {
  return (
    <section className='section'>
      <div class='container'>
        <div class='row align-items-center'>
          <div class='col-md-4 me-auto'>
            <h2 class='mb-4'>MyLibrary Community</h2>
            <p class='mb-4'>
              Once you download the mobile app you can join with your friends
              inside the community who are book bugs the same as you, You can
              post, share and update about what are you reading now. Really
              Interesting!
            </p>
            {/* <p>
              <a href='#' class='btn btn-primary'>
                Download Now
              </a>
            </p> */}
          </div>
          <div class='col-md-6' data-aos='fade-left'>
            <img src={phone_2} alt='' class='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
