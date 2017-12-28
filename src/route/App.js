import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventDispatcher } from '../actions';

// import logo from '../assets/images/logo.svg';
import '../assets/styles/application.scss';
import TopBar from '../components/TopBar';
import ShopBar from '../components/ShopBar';
import Catagory from '../components/Catagory';
import Banner from '../components/Banner';

class App extends Component {

  _onSelectTopMenuHandler(action) {
    console.log(action);
  }

  render() {
    return (
      <div className="app">
        <TopBar action={this._onSelectTopMenuHandler.bind(this)}/>
        <ShopBar/>
        <Catagory/>
        <Banner/>
        <div>NEXT</div>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProduct: EventDispatcher.getProduct,
  }, dispatch);
};

const stateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(stateToProps, dispatchToProps)(App);
