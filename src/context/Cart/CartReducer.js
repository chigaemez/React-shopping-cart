import { SHOW_HIDE_CART, ADD_TO_CART, INCREASE } from '../Types'
import { toast } from "react-toastify"




const CartReducer = (state, action) => {




  switch (action.type) {


    case "ADD":

      toast.success("Added product to cart", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        limit: 1
      })


      const tempState = state.filter((item) => action.payload.id == item.id)
      if (tempState.length > 0) {

        return state
      } else {
        return [...state, action.payload]


      }



    case 'INCREASE':

    toast.info("Increased product quantity", {
        position:"bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        limit: 1
      })
      const tempState2 = state.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })

      return tempState2


    case 'DECREASE':
      const tempState3 = state.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })

      return tempState3


    case 'REMOVE':

    toast.error("Item has been removed", {
      position:"bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      limit: 1
    })
 
      const tempState4 = state.filter((item) => item.id !== action.payload.id)



      return tempState4


    case 'CLEAR':
      toast.error("Cart has been cleard", {
        position:"bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        limit: 1
      })
      const tempState5 = state.filter((item) => item == [])

      return tempState5

    default:
      return state
  }
}

export default CartReducer



// toast.info("Increased product quantity", {
//   position:"bottom-left"
// })

// toast.success("Added product to cart", {
//   position:"bottom-left"
// })