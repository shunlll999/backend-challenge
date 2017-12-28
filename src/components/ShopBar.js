import React from 'react';

const ShopBar = () => (
  <div className="shop-bar">
    <div className="shop-bar__container">
      <div className="shop-bar__name">
        <h1>BOBFY</h1>
        <div className="shop-bar__name--small">fasion by BOB</div>
      </div>
      <div className="shop-bar__search">
        <input className="shop-bar__search--input" type="text" placeholder="search"/>
        <button className="shop-bar__search--find" type="button"></button>
      </div>
    </div>
  </div>
);

export default ShopBar;