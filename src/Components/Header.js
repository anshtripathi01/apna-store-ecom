import { Link, useNavigate } from "react-router-dom";
import styles from '../pages/Products/Products.module.css';
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import { StateContext } from "../Context/Context";

const Header = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const { state } = useContext(StateContext)

    const logoutHandler = () => {
        localStorage.clear()
        setToken(undefined);
        navigate(0)
        navigate('/')
    }
    return (
        <header class="header">
            <h1>ApnaStore</h1>
            <nav class="navbar">
                <ul class="nav">

                    <Link to={'/'} ><li class="nav-link"> Home
                    </li></Link>
                    <Link to={'products'} ><li class="nav-link">Shop
                    </li></Link>
                </ul>
                <ul class="user-nav-link">
                    <i class="searchbar fa-solid fa-magnifying-glass"></i>
                    <input type="search"
                        placeholder="search a product" />
                    {token === undefined ? <>
                        <Link to={'login'} ><li class="nav-link"> <i
                            class="nav-icon fa-solid fa-user"></i></li> </Link>
                        <Link to={'login'} ><li class="nav-link"><i class="nav-icon fa-solid fa-cart-shopping" ></i></li></Link>
                        <Link to={'login'} ><li class="nav-link"><i class="nav-icon fa-solid fa-heart"></i></li></Link></> :
                        <>
                            <Link to={'cart'} ><li class="nav-link"><i class="nav-icon fa-solid fa-cart-shopping" ></i> <span class="badges cart-badges">{state.cart?.length}</span></li></Link>
                            <Link to={'wishlist'} ><li class="nav-link"><i class="nav-icon fa-solid fa-heart"></i><span class="badges cart-badges">{state.wishlist.length}</span></li></Link>
                            <Link to={'/'}><li class="nav-link"> <i class={`${styles.logoutBtn} fa-solid fa-right-from-bracket`} onClick={logoutHandler}> </i></li></Link> </>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;