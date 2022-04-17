import React ,{useContext}from 'react'
import ProductCard from '../../Components/ProductCard'
import { StateContext } from '../../Context/Context'
import styles from '../Wishlist/Wishlist.module.css'
const Wishlist = () => {
    const {state} = useContext(StateContext)

  return (
      <>
    <h3>My Wishlist ({state.wishlist.length})</h3>

    <div className={styles.wishlistContainer}>
        
    {state.wishlist.length===0 ? <><h4>Your wishlist is empty!</h4></>:<>{state.wishlist.map(product => <ProductCard product={product} />)}</>}
        </div>

        
    
</>
  )
}

export default Wishlist