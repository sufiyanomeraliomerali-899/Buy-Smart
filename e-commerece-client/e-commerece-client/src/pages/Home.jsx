import { useEffect, useState } from "react";
import Api from "../api/axios";
import ProductCart from "../components/productCart.jsx";
import Hero from "../components/hero.jsx";
import "./home.css";

export default function Home({ search, sort }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await Api.get("/products");

        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    fetchProducts();
  }, []);

  let filteredProducts = products.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase());
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Hero />
      <h2>Products</h2>
      <div className="grid">
        {filteredProducts.map((p) => (
          <ProductCart key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}
