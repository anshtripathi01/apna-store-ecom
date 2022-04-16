
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import styles from '../pages/Products/Products.module.css';
import { StateContext } from '../Context/Context';
import { addToCart, updateProductQty } from '../CartUtilityFunction';
import { AuthContext } from '../Context/AuthProvider';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(StateContext)
  const { token, setToken } = useContext(AuthContext);
  window.onbeforeunload = function (e) {
    localStorage.clear()
    setToken(undefined);

  };


  const navigate = useNavigate();
  const [cartButtonText, setCartButtonText] = useState("Add To Cart")
  const handleAddTOCart = () => {

    if (token === undefined) {
      navigate('/login')
    }


    else {
      const isItemPresent = state.cart.find(itemInCart => itemInCart._id === product._id)
      if (cartButtonText === "Add To Cart") {
        if (token === undefined) {
          navigate('/login')
        } else {
          if (isItemPresent === undefined) {
            addToCart(product, token, dispatch)
            setCartButtonText('Go To Cart')
          } else {
            setCartButtonText("Go To Cart")
            const isItemPresentInWishList = state.wishlist.find(itemInWishlist => itemInWishlist._id === product._id)
            if (isItemPresentInWishList !== undefined) {
              updateProductQty(product._id, token, dispatch, "increment")

            }
          }
        }
      } else {
        navigate('/cart')
      }
    }
  }

  return (
    <>
      <div className={`card ${styles.card}`} key={product._id}>

        <div className="img">
          {product.featured && <span className={styles.newBadges}>{product.featured}</span>}
          <img src={product.image}
            alt="product_img" />
          <h4 className={styles.productTitle}>{product.productName}</h4>
          <a href="/Components/Wishlist/wishlist.html"> <i className={`like-btn ${styles.likeBtn} fa-solid fa-heart`}></i></a>

          <div className={styles.priceContainer}><p className={styles.price}>₹{product.price}  </p>

            <p className={styles.discountPrice}>₹{product.discountPrice}</p>

            <p className={styles.discountPer}>-{product.discountPrice}% OFF</p>
            <span><i class="fa fa-star" aria-hidden="true"></i>{product.rating}</span>
          </div>
          <button className={`btn btn-solid-primary ${styles.btn}`} >Buy Now</button>
          <button className={`btn btn-outline-primary ${styles.btn}`} onClick={handleAddTOCart} >{cartButtonText}</button>

        </div>
      </div>
    </>
  )
}

export default ProductCard;