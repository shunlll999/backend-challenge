import React from 'react';

const TopBar = ({ action }) => (
  <div className="top-bar">
    <div className="top-bar__container">
      <ul className="top-bar__list">
        <li className="top-bar__list--item" onClick={()=> action('myAccount') }>MY ACCOUNT</li>
        <li className="top-bar__list--item" onClick={()=> action('witchlist') }>WITCHLIST</li>
        <li className="top-bar__list--item" onClick={()=> action('login') }>LOGIN</li>
        <li className="top-bar__list--item active" onClick={()=> action('signup') }>SIGNUP</li>
      </ul>
    </div>
  </div>
);

export default TopBar;