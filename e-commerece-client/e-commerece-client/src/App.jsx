import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import ProductDetails from "./pages/productDetails";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/privateRoute";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSearch={setSearch} setSort={setSort} />
      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
