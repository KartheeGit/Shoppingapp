import React from 'react'
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';

class ProductListing extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', 'http://localhost:8003/products/')
            .then((json => {
                loadProducts(json)
            }))
        console.log(loadProducts)
    }
    render() {
        const { products, cart, addToCart, removeFromCart } = this.props
        return (
            <div className="container">
                {
                    products.map(product =>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <ProductListItem
                                        className="card"
                                        product={product}
                                        key={product.id}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
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