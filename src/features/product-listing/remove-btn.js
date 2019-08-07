import React from 'react'

function RemoveItemBtn(props) {

    return (
        <div>
            <button
                className="btn btn-danger"
                onClick={() => props.removeFromCart(props.cartItem)}>
                Remove from Cart
                </button>
        </div>
    )

}

export default RemoveItemBtn;