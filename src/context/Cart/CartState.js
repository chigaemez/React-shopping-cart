import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer'
import {ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART, ISINCART, INCREASE} from '../Types'

const CartState = ({children}) => {
    const initialState ={
        showCart : false,
        cartItems:[ ] 
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload : item})
    }

    const ShowHiddenCart = () =>{
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem = (id) => {
        dispatch({type:REMOVE_ITEM, payload: id})
    }

    const isInCart = (id) =>{
        dispatch({type:ISINCART, payload: id})
    }

    const increase = ( id) => {
        dispatch({type: INCREASE, payload : id})
    }



    return <CartContext.Provider value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        ShowHiddenCart,
        removeItem, 
        isInCart, 
        increase
    }}>{children}</CartContext.Provider>
}

export default CartState