import { type } from "@testing-library/user-event/dist/type"

export const addAllCartItems = (cartItems) => {
    return {
        type: 'ADD_ALL_CART_ITEMS',
        payload: cartItems
    }
}
export const addAllItems = (airItems) => {
    return {
        type: 'ADD_ALL_ITEMS',
        payload: airItems
    }
}
export const addNewItem = (cartItem) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: cartItem
    }
}
export const incCartItem = (cartItem) =>
{
    return{
        type: 'ADD_NUM_CART',
        payload:cartItem
    }
}
export const rmCartItem = (cartItem) =>
{
    return{
        type: 'RM_NUM_CART',
        payload:cartItem
    }
}
export const addNewOrderC = (orderC) => {
    return {
        type: 'ADD_NEW_ORDER_CONF',
        payload: orderC
    }
}



