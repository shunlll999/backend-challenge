import React from 'react';

const Banner = () => (
  <div className="banner">
    <div className="banner__container">
      <div className="banner__slide">
        <img src="http://rp-themez.com/leisure/Fashion_shop/images/lm_banner_3.jpg" alt="banner"/>
        <button className="banner__slide--prev" type="button">{`<`}</button>
        <button className="banner__slide--next" type="button">{`>`}</button>
      </div>
      <div className="banner__tap">
        <div className="banner__tap--item">
          Promotion A
        </div>
        <div className="banner__tap--item">
          Promotion B
        </div>
        <div className="banner__tap--item">
          Promotion B
        </div>
      </div>
    </div>
  </div>
);

export default Banner;