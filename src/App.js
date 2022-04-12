import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/products" element={<Products />}/>
      </Routes>
    </div>
  );
}

export default App;
