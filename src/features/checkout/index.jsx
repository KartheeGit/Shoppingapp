import React from 'react'
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import FetchApi from '../../modules/fetch-api';

function submitOrder(cart, values) {
    const { email, name, mobile } = values.order
    alert("Products has been checked-out successfully");
    FetchApi('post', 'http://localhost:8002/products/', {
        order: {
            name,
            email,
            mobile,
            order_items_attributes: cart.map(item => ({

            }))
        }

    }).then(json => {
        if (json.error) {
            alert("Something went wrong");
            return
        }
        document.location.href = `/order/ $ {json.id}`
    })

}

function Checkout(props) {

    const { cart } = props
    return (
        <div className="container">
            {/* <h2>Checkout Page</h2> */}
            <Cart />
            <div>

                <CheckoutForm onSubmit={(values) => submitOrder(cart, values)} />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout);