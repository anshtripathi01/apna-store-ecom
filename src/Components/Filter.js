import React from 'react'
import {useContext} from 'react'
import styles from '../pages/Products/Products.module.css';
import { StateContext } from '../Context/Context'
const Filter = () => {
    const { state, dispatch } = useContext(StateContext)


  return (
    <aside>
    <p> <span className={styles.filter}>Filters </span>
    <button className={`${styles.btn} btn-link-primary`} onClick={(e) => dispatch({ type: 'CLEAR_ALL_FILTERS' })} >Clear All</button></p>

    <h4> Sort By Price</h4>
    <p><input type="radio" value={state.sortBy} checked={state.sortBy && state.sortBy === "New"} name="sortBy" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "New" })}  />
        Featured</p>
    <p><input type="radio"  value={state.sortBy} checked={state.sortBy && state.sortBy === "low-to-high"} name="sortBy" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "low-to-high" })}/>
        Price Low to High</p>
    <p><input type="radio" value={state.sortBy} name="sortBy" checked={state.sortBy && state.sortBy === "high-to-low"} onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "high-to-low" })} />
        Price High to Low</p>
    <h4>Sort By Category</h4>
    <p><input type="checkbox" checked={state.sortByFilters.sortByCategory.includes("Men")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Men" })}/>Men Clothing</p>
    <p><input type="checkbox" checked={state.sortByFilters.sortByCategory.includes("Women")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Women" })} />Women Clothing</p>
    <h4>Sort By Rating</h4>
    <p><input type="radio"  name="Rating" value={state.rating} checked={state.rating && state.rating === 4}  onClick={(e) => dispatch({ type: 'SET_RATING', payload: 4 })} />4 Stars & above</p>
    <p><input type="radio" name="Rating" value={state.rating} checked={state.rating && state.rating ===  3}   onClick={(e) => dispatch({ type: 'SET_RATING', payload: 3 })} />3 Stars & above</p>
    <p><input type="radio" name="Rating" value={state.rating} checked={state.rating && state.rating ===  2}   onClick={(e) => dispatch({ type: 'SET_RATING', payload: 2 })}/>2 Stars & above</p>
    <p><input type="radio" name="Rating"  value={state.rating} checked={state.rating && state.rating === 1}  onClick={(e) => dispatch({ type: 'SET_RATING', payload: 1 })} />1 Stars & above</p>

</aside>
  )
}

export default Filter