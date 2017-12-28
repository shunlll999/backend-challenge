import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__other">
          <div className="footer__other--title">
            New Arrivals
          </div>
          <div className="footer__other--item">Contrary</div>
          <div className="footer__other--item">Popular</div>
          <div className="footer__other--item">Belief</div>
          <div className="footer__other--item">Making</div>
          <div className="footer__other--item">College</div>
        </div>
        <div className="footer__customer">
          <div className="footer__customer--title">
            Custom services
          </div>
          <div className="footer__other--item">Contrary</div>
          <div className="footer__other--item">Popular</div>
          <div className="footer__other--item">Belief</div>
          <div className="footer__other--item">Making</div>
          <div className="footer__other--item">College</div>
        </div>
        <div className="footer__introducing">
          <div className="footer__introducing--title">
            Introducing
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;