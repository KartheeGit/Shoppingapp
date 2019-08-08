import React from 'react';
import ProductListing from '../features/product-listing/';
import data from '../data/products.json';
function HomePage(props) {
    return (
        <div>
            <h2>Products</h2>
            <div className="container">
                <ProductListing products={data.products} />
            </div>

        </div>
    )
}
export default HomePage;