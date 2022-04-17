import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from 'mockman-js'
import Header from "./Components/Header";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/wishlist" element={<Wishlist />}/>
        <Route path="/mock" element={<Mockman/>} />
     </Routes>
    </div>
  );
}

export default App;
