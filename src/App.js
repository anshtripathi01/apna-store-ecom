import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
