import React from 'react'
import './Cart.css'
import { StateContext } from '../../Context/Context';
import { useContext } from 'react';
import { updateProductQty, calculateFinalCartPrice, findPriceOfAllItems, findTotalDiscount, removeFromCart } from '../../CartUtilityFunction';
import { AuthContext } from '../../Context/AuthProvider';
import { handleAddToWishlist } from '../../WishlistUtilityFunction';



const Cart = () => {
  const { token } = useContext(AuthContext)
  const encodedToken = localStorage.getItem('token')
  const { state, dispatch } = useContext(StateContext)
  const totalPrice = findPriceOfAllItems(state.cart)
  const totalDiscount = findTotalDiscount(state.cart)
  const finalCartPrice = calculateFinalCartPrice(totalPrice, totalDiscount, 40)



  return (
    <>
      <h3>My Cart({state.cart.length})</h3>

      <div class="cart-container">
        {state.cart.length === 0 && <h2>Empty Cart</h2>}
        {state.cart.map(product => {
          return (
            <div class="horizontal-card-container" key={product._id}> 
              <div class="horizontal-card">
                <div class="img">
                  <img src={product.image}
                    alt="" />
                </div>
              </div>
              <div class="text-container">
                <h3>{product.productName}</h3>
                <p>₹{product.price}</p>
                <p class="discount-price">Rs.1499</p>
                <p>50% OFF</p>
                <div class="quantity">
                  Quantity: <button class="counter-btn" onClick={(e) => updateProductQty(product._id, encodedToken, dispatch, "increment")}>+</button>
                  <button class="count">{product.qty}</button>
                  <button class="counter-btn" onClick={(e) => product.qty > 1 && updateProductQty(product._id, encodedToken, dispatch, "decrement")}>-</button>
                </div>

                <button class="btn btn-solid-primary" onClick={(e) => removeFromCart(product._id, encodedToken, dispatch)}>Remove</button>
                <button class="btn btn-outline-primary" onClick={(e) => handleAddToWishlist(state.wishlist, product, token, dispatch, null)}>Move to Wishlist</button>
              </div>

            </div>

          )
        })}


        {state.cart.length >0 && <div class="price-details">

          <h3>Price Details</h3>
          <hr />
          <div>Price({state.cart.length} items) </div>
          <div> Rs.{totalPrice} </div>
          <div>Discount </div>
          <div> Rs.{totalDiscount} </div>
          <div>Delivery Charges </div>
          <div>Rs.40</div>

          <div>
            <h3>Total Amount</h3>
          </div>
          <div>
            <h3>Rs.{finalCartPrice}</h3>
          </div>
          <div>You will save Rs.{totalDiscount} on this order</div>
          <button class="btn btn-solid-primary">Place Order</button>

        </div>}
      </div>
    </>
  )
}

export default Cart