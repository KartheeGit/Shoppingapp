import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component ={Cart} />
        </Switch>
    )


}

export default Router;