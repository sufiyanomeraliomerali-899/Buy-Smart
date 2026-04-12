import { useEffect, useState } from "react";
import Api from "../api/axios";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import "./productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await Api.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [id]);

  if (!product) return <h2>Loading....</h2>;

  return (
    <div className="details">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2>Name: {product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
