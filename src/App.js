import React, { Component } from 'react';
import Router from './router';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navigation = (props) =>
  <nav>
    <ul>
      <li> <NavLink to="/">Home </NavLink></li>
      <li> <NavLink to="/cart"> Cart</NavLink> </li>
    </ul>
  </nav>



class App extends Component {


  render() {
    console.log(this.props);
    return (
      <div className="page-containers">

        <Navigation />
        <Router />
      </div>
    );
  }


}




export default App;
