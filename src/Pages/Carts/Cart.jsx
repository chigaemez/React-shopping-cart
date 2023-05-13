import React, { useContext} from 'react'
import { FaTimes, FaLongArrowAltLeft } from 'react-icons/fa'
import CartContext from '../../context/Cart/CartContext'
import CartItem from './CartItem'
import './CartItem.css'
import { Link } from 'react-router-dom'



const Cart = () => {
  const {  ShowHiddenCart } = useContext(CartContext)
 

  const GlobalState = useContext(CartContext)
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch



  const total = state.reduce((total, item) =>{
      return total + item.price * item.quantity 
  }, 0)

  return (
    <>

      {

          <div className='cart-wrapper' >

            <div className='text-center'>
              <div className='text-center top-hold'>

                <h4 className='Amtincart'>Your Items:{state.length} </h4>

                <Link to="/ProductGrid">
                  <FaTimes  onClick={ShowHiddenCart} style={{ cursor: 'pointer' }} className='close-btn text-dark' />
                </Link>


              </div>


              <div className="title">
                  <h3>Product</h3>
                  <h3 className="first">Price</h3>
                  <h3 className="second">Quantity</h3>
                  <h3>Total</h3>
                </div>


              <div className="cart-holder text-center">

              



                {state.length === 0 ? (<h4>Cart is Empty</h4>) : (
                  <ul>
                    {state.map((item, index) => (<CartItem key={index} item={item} />))}
                  </ul>
                )}
              </div>

              <div className="cart-total">
                <div className="clear">
                  <button className="btn" onClick={() => dispatch({type:'CLEAR'})}>Clear Cart</button>
                </div>
                <div style={{ marginLeft: 5 }} className="total-cal">


                  {state.length > 0 && <h1 className='amtintotal'>${total}</h1>}

                  <p className='warn'>Taxes and shipping calculated at check out</p>

                  <div className="checkout">
                    <button className="btn bg-primary check-btn"> Check out</button>
                  </div>

                  <Link to="/"><a href=""> <span className="arrow"><FaLongArrowAltLeft /></span>  Continue Shopping</a></Link>

                </div>
              </div>
            </div>

          </div>
      }
    </>
  )
}

export default Cart

