import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, ISINCART, INCREASE } from '../Types'

const CartReducer = (state, action) => {
    


    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart
            }

        }
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        }

        case ISINCART:{
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id === action.payload)
            }

        } 

        case INCREASE:{

            return{

                ...state,
                cartItems: state.cartItems.map(item => item.id).includes(action.payload).quantity+1
                
            }



        }

        
        default:
            return state
    }
}

export default CartReducer