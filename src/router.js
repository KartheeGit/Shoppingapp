import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component ={Cart} />
            <Route exact path="/checkout" component ={Checkout} />
        </Switch>
    )


}

export default Router;