
import styles from '../pages/Products/Products.module.css';


const ProductCard = ({product}) => {

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
              
        <p className={styles.discountPrice}>₹ {product.discountPrice}</p>

        <p className={styles.discountPer}>-73% OFF</p>
               <span><i class="fa fa-star" aria-hidden="true"></i>{product.rating}</span>
                </div>
                 <button className={`btn btn-solid-primary ${styles.btn}`} >Buy Now</button>
                 <button className={`btn btn-outline-primary ${styles.btn}`}>Add to Cart</button>
              
      </div>
      </div>
      </>
  )
}

export default ProductCard;