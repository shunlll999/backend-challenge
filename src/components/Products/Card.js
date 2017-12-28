import React from 'react';

const Card = () => (
  <div className="card">
    <img src="./assets/images/women.png" alt="card"/>
    <div className="card--title">What is Lorem Ipsum?</div>
    <div className="card--description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
    <div className="card__footer">
      <div className="card__footer--witchlist" onClick={()=> console.log('add to witchlist')}>+ Add to witchlist</div>
      <button className="card__footer--add-cart" type="button">$80</button>
    </div>
  </div>
);

export default Card;