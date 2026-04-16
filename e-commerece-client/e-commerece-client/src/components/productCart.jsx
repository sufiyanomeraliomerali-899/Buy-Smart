import React from "react";
import useCart from "../hooks/useCart.jsx";
import { useNavigate } from "react-router-dom";
import "./productCart.css";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    console.log("Adding product:", product);
    addToCart(product);
  };

  return (
    <div className="card">
      <img
        src={`https://buy-smart-52yy.onrender.com/${product.image}`}
        alt={product.name}
        className="product-img"
      />
      <h3 onClick={() => navigate(`/products/${product._id}`)}>
        Name : {product.name}
      </h3>
      <p>Price : ${product.price}</p>

      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  );
};

export default ProductCart;
