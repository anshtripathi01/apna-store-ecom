
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../pages/Products/Products.module.css';
import { StateContext } from '../Context/Context';
import { addToCart} from '../CartUtilityFunction';
import { AuthContext } from '../Context/AuthProvider';
import { handleAddToWishlist, removeFromWishlist } from '../WishlistUtilityFunction';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(StateContext)
  const { token , setToken} = useContext(AuthContext);
  window.onbeforeunload = function (e) {
    localStorage.clear()
    setToken(undefined);

  };

  const navigate = useNavigate();
  const handleAddTOCart = () => {

    if (token === undefined) {
      navigate('/login')
    }
    else{
    addToCart(product, token, dispatch)
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
          {state.wishlist.includes(product) ? <></>:<><i className={`like-btn ${styles.likeBtn} fa-solid fa-heart`} onClick={(e) => handleAddToWishlist(state.wishlist, product, token, dispatch, navigate)}></i></>}

          <div className={styles.priceContainer}><p className={styles.price}>₹{product.price}  </p>

            <p className={styles.discountPrice}>₹{product.discountPrice}</p>

            <p className={styles.discountPer}>-{product.discountPrice}% OFF</p>
            <span><i class="fa fa-star" aria-hidden="true"></i>{product.rating}</span>
          </div>
          {state.wishlist.includes(product) ? <>  <button className={`btn btn-solid-primary ${styles.btn}`} onClick={() => removeFromWishlist(product._id, token, dispatch)} >Remove</button> </>:<button className={`btn btn-solid-primary ${styles.btn}`} >Buy Now</button>}
        {state.cart.find(item=>item._id===product._id)?  <button className={`btn btn-outline-primary ${styles.btn}`} onClick={()=>navigate('/cart')} >Go To Cart</button>: <button className={`btn btn-outline-primary ${styles.btn}`} onClick={handleAddTOCart}>Add To Cart</button>}

        </div>
      </div>
    </>
  )
}

export default ProductCard;