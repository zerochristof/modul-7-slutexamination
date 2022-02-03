import { bindActionCreators } from "redux";

const intialState = {
    cartItems:[],
    airItems: [],
    orderC: []
}


const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_CART_ITEMS':
            return {
                ...state.cartItems,
                cartItems: action.payload
            }
        case 'ADD_ALL_ITEMS':
            return {
                ...state,
                airItems: action.payload
            }
      
            case 'ADD_NEW_ITEM':
                    return {
                        ...state,
                        cartItems: [...state.cartItems,{id:action.payload,num:1}]
                    }
       
case 'ADD_NUM_CART':
    return {
        
        ...state,
        cartItems: state.cartItems.map(items =>
         items.id==action.payload
         ? {...items, num: items.num+1 }
         : items
         )
    }
    case 'RM_NUM_CART':
    return {
        
        ...state,
        cartItems: state.cartItems.map(items =>
         items.id==action.payload
         ? {...items, num: items.num-1 }
         : items
         )
    }
        case 'ADD_NEW_ORDER_CONF':
            return {
                ...state,
                orderC: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;
