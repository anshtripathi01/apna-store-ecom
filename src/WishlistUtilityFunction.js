import axios from "axios";
import { removeFromCart } from "./CartUtilityFunction";

export const handleAddToWishlist = (wishlist, product, token, dispatch, navigate) => {

  if (token === undefined) {
    navigate('/login')
  } else {
    const isItemPresent = wishlist.find(itemInWishlist => itemInWishlist._id === product._id)
    if (isItemPresent === undefined) {
      addToWishlist(product, token, dispatch)
      removeFromCart(product._id, token, dispatch)
    }
  }

}

export const addToWishlist = (product, token, dispatch) => {
  try {
    fetch("/api/user/wishlist", {
      method: "POST",
      body: JSON.stringify({ product: product }),
      headers: {
        authorization: token,
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_WISHLIST', payload: data.wishlist }))
  } catch (error) {
    console.log(error)
  }
}

export const removeFromWishlist = async (id, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'SET_WISHLIST', payload: wishlist })
  } catch (error) {
    console.log("Error in wishlist service", error);
  }
}