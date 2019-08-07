const cartWithoutItems = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

const ItemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const AddToCart = (cart, item) => {
    const cartItem = ItemInCart(cart, item)
    return cartItem === undefined
        ? [...cartWithoutItems(cart, item), { ...item, quantity: 1 }]
        : [...cartWithoutItems(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]

}

const removeFromCart = (cart, item) => {
    return item.quantity === 1
        ? [...cartWithoutItems(cart, item)]
        : [...cartWithoutItems(cart, item), { ...item, quantity: item.quantity - 1 }]
}


const removeAllFromCart = (cart, item) => {
    return [...cartWithoutItems(cart, item)]
}

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return AddToCart(state, action.payload)
        case 'REMOVE':
            return removeFromCart(state, action.payload)
        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)
        default:
            return state;
    }

}

export default cartReducer;