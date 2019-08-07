import React from 'react'

function AddItemBtn(props) {

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => props.addToCart(props.product)}>
                Add to Cart ({
                    (props.cartItem && props.cartItem.quantity) || 0
                })</button>
        </div>

    )

}

export default AddItemBtn;