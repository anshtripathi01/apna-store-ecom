import React, { useEffect, useContext } from 'react'
import {  StateContext } from '../../Context/Context';
import styles from '../Products/Products.module.css'
import { getFilteredData, getRatingSortedData, getSortedData } from '../../FilterFunction';
import ProductCard from '../../Components/ProductCard';
import Filter from '../../Components/Filter';

const Products = () => {
  const { state, dispatch } = useContext(StateContext)
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch('/api/products', { method: "GET" })
          const data = await res.json()
          dispatch({ type: 'SET_PRODUCTS', payload: data.products })
        } catch (e) {
          console.log(e)
        }
      };
      fetchData();
    },[dispatch])
    
    const sortedData = getSortedData(state.products, state.sortBy);
    const ratingSortedData=getRatingSortedData(sortedData,state.rating)
    const filteredData = getFilteredData(ratingSortedData,state)
return (
    <main className={styles.mainContainer}>
   <Filter />
<div className={styles.productsContainer}>

    {filteredData.map((product=>{
         return(
    <ProductCard product={product} />
    
  )}))}
  </div>

</main>
)
}


export default Products;