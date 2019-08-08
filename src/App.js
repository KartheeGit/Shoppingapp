import React, { Component } from 'react';
import Router from './router';
import { NavLink, withRouter, Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

const Navigation = ({ cart }) =>
  <div className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shopping App
			</Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
          <NavLink className="nav-item nav-link" to="/cart"> Cart({cart.length}) </NavLink>
          <NavLink className="nav-item nav-link active" to="/checkout">Checkout </NavLink>
        </div>
      </div>
    </nav>
  </div>

class App extends Component {


  render() {
    console.log(this.props);
    return (
      <div className="">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}


export default withRouter(connect(mapStateToProps)(App));
