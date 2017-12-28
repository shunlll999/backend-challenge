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
import Products from '../components/Products';
import Card from '../components/Products/Card';
import SubscribeBar from '../components/SubscribeBar';
import Footer from '../components/Footer';

class App extends Component {

  _onSelectTopMenuHandler(action) {
    console.log(action);
  }

  _onSelectCategory(category) {
    this.props.getProduct(category);
  }

  _renderProduct() {
    const { projectsList } = this.props.products;
    return projectsList.map((data, i) => <Card key={i} photo={data.photo}/>);
  }

  render() {
    return (
      <div className="app">
        <TopBar action={this._onSelectTopMenuHandler.bind(this)}/>
        <ShopBar/>
        <Catagory selected={this._onSelectCategory.bind(this)}/>
        <Banner/>
        <Products>
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/>
          <div className="product__underline"></div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <div className="product__underline"></div> */}
          { this._renderProduct() }
        </Products>
        <SubscribeBar/>
        <Footer/>
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
