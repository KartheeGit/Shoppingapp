import React from 'react';
import ProductListing from '../features/product-listing/';
import data from '../data/products.json';


function HomePage(props) {
    return (
        <div>
            <h2>Shoppling Category</h2>
            <div className="container">
                <ProductListing />
            </div>

        </div>
    )
}
export default HomePage;