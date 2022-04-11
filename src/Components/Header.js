import { Link } from "react-router-dom";
import styles from '../pages/Home/Home.module.css';
const Header = () => {


    return(
        <header class="header">
        <h1>ApnaStore</h1>
        <nav class="navbar">
            <ul class="nav">
              <Link to = {'/'} ><li class="nav-link"> Home
                </li></Link> 
               <Link to={'products'} ><li class="nav-link">Shop
                </li></Link>
            </ul>
            <ul class="user-nav-link">
                <i class="searchbar fa-solid fa-magnifying-glass"></i>
                 <input type="search"
                    placeholder="search a product" />
               <Link to={'Signup'} ><li class="nav-link"> <i
                            class="nav-icon fa-solid fa-user"></i></li> </Link>
                <Link to={'wishlist'} ><li class="nav-link"><i class="nav-icon fa-solid fa-heart"></i></li></Link> 

             <Link to={'cart'} ><li class="nav-link"><i class="nav-icon fa-solid fa-cart-shopping"></i></li></Link>  
             <li class="nav-link"> <Link to={'Home'}><i class={`${styles.logoutBtn} fa-solid fa-right-from-bracket`}></i></Link> </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;