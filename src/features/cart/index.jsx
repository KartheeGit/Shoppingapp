import React from 'react'
import { connect } from 'react-redux';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}

const Cart = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>Quantity </th>
                        <th>Price </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sort(props.cart).map(item => <tr>
                            <td className="items-center"> {item.name}</td>
                            <td className="align-center">{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => props.addToCart(item)}> + </button>
                            </td>
                            <td>
                                <button onClick={() => props.removeFromCart(item)}> - </button>
                            </td>
                            <td>
                                <button onClick={() => props.removeAllFromCart(item)}>
                                    Remove all Items
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
}

function mapStateToProps(state) {

    return { cart: state.cart }

}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


// const cartItemsWithQuantities = (cartItems) => {
//     return cartItems.reduce((acc, item) => {
//         const filteredItem = acc.filter(item2 => item2.id === item.id)[0]

//         filteredItem !== undefined ? filteredItem.quantity++ : acc.push({ ...item, quantity: 1 })
//         return acc
//     }, [])

// }


// export default cartItemsWithQuantities; 