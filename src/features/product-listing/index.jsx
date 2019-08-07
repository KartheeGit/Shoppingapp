import React, { Component } from 'react'
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';

class ProductListing extends Component {
    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', 'https://api.myjson.com/bins/l3t9l')
            .then((json => {
                loadProducts(json)
            }))
        console.log(loadProducts)
    }

    render() {
        const { addToCart, removeFromCart, cart, products } = this.props
        return (
            <div className="product-listing" >
                {
                    products.map(product =>
                        <ProductListItem
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                        />
                    )
                }


            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products
    }

}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (products) => {
            dispatch({ type: 'LOAD', payload: products })
        },
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);