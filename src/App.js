import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from 'mockman-js'
import Header from "./Components/Header";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route path="/mock" element={<Mockman/>} />
     </Routes>
    </div>
  );
}

export default App;
