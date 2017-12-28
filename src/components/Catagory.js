import React, { Component } from 'react';

let currentCat = null;

class Catagory extends Component  {
  constructor () {
    super();

    this.state = {
      onActive: ''
    }
  }

  componentDidMount() {
    this._onSelectedHandler('WOMEN');
  }

  _onSelectedHandler(value) {
    if( currentCat ){
      currentCat.className = 'catagory__list--item';
    }

    document.getElementById(value).className = 'catagory__list--item active';
    currentCat = document.getElementById(value);

    this.props.selected(value);
  }

  render() {
    return (
      <div className="catagory">
        <div className="catagory__container">
          <ul className="catagory__list">
            <li id="WOMEN" className="catagory__list--item" onClick={() => this._onSelectedHandler('WOMEN')}>WOMEN</li>
            <li id="MEN" className="catagory__list--item" onClick={() => this._onSelectedHandler('MEN')}>MEN</li>
            <li id="KIDS" className="catagory__list--item" onClick={() => this._onSelectedHandler('KIDS')}>KIDS</li>
            <li id="FASION" className="catagory__list--item" onClick={() => this._onSelectedHandler('FASION')}>FASION</li>
            <li id="ACCESSORIES" className="catagory__list--item" onClick={() => this._onSelectedHandler('ACCESSORIES')}>ACCESSORIES</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Catagory;