import React from 'react'
import styles from '../Home/Home.module.css';
import image from '../Home/home-image.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Footer from '../../Components/Footer';
import { StateContext } from '../../Context/Context';

const Home = () => {
    const [categories, setCategories] = useState([])
    const { dispatch } = useContext(StateContext)
    useEffect(() => {
        fetch('/api/categories')
            .then((res => {
                return res.json();
            }))
            .then(data => {
                setCategories(data.categories);
            })
    }, [])

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerContent}>
                        {categories.categoryName}
                        <h1>Online Shopping</h1>
                        <p>Welcome to ApnaStore No.1 Online Shopping Brand. This is good place to buy luxeries products. You
                            can virtually inetract with your products</p>
                        <Link to={'products'} className="btn btn-solid-primary" >Shop Now </Link>

                    </div>
                    <div>
                        <img className={styles.homeImage} src={image} alt="" />
                    </div>

                </div>
                <h3>Featured Category</h3>
                <div className={styles.categoryContainer}>
                    {categories.map((categorie) => {
                        return (
                            <>
                                <div className={`card ${styles.card}`}>

                                    <div className={styles.img}>
                                        <img src={categorie.Image} alt="categori_first" />

                                        <div>
                                            <Link to={'products'}>   <h5 onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: categorie.categoryName })}>{categorie.categoryName}</h5></Link>
                                        </div>

                                    </div>
                                </div>


                            </>
                        )
                    })}

                </div>

                <h3>Top Brands</h3>
                <div className={styles.brandContainer}>
                    <div className={`card ${styles.card}`}>

                        <div className={styles.img}>
                            <img src="data:image/png;base64,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"
                                alt="2nd-category" />
                        </div>

                    </div>

                    <div className={`card ${styles.card}`}>
                        <div className={styles.img}> <img
                            src="data:image/png;base64,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"
                            alt="2nd-brand" />
                        </div>
                    </div>

                    <div className={`card ${styles.card}`}>
                        <div className={styles.img}> <img
                            src="data:image/png;base64,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"
                            alt="3rd-brand" />
                        </div>
                    </div>

                    <div className={`card ${styles.card}`}>
                        <div className={styles.img}> <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPTuObqJ7tJ-AXQbV2jGFtqx7yNz9ajZ2kw&usqp=CAU"
                            alt="4th-brand" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;