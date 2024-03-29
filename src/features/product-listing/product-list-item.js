import React from 'react';
import AddItemBtn from './add-btn';
import RemoveItemBtn from './remove-btn';

function productListItem(props) {

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h6> {props.product.title}</h6>
                    <img
                        height={100}
                        title={props.product.title}
                        src={props.product.src}
                    />
                    <div> <p>{props.product.color}</p> </div>
                    <div> <p>{props.product.price}</p> </div>
                    <div>
                        <span>{props.product.features}</span>
                    </div>
                    <div>
                        <AddItemBtn
                            cartItem={props.cartItem}
                            product={props.product}
                            addToCart={props.addToCart} />
                    </div>
                    {
                        props.cartItem
                            ?
                            <RemoveItemBtn
                                cartItem={props.cartItem}
                                product={props.product}
                                removeFromCart={props.removeFromCart} />
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default productListItem;


