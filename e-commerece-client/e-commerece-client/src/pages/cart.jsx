import useCart from "../hooks/useCart.jsx";
import "./cart.css";

export default function Cart() {
  const { cart, removeFromCart, totalPrice, decreaseQty, addToCart } =
    useCart();

  return (
    <div className="cart cart-summary">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>$ {item.price}</p>

          <button onClick={() => decreaseQty(item._id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => addToCart(item)}>+</button>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item._id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹ {totalPrice}</h2>
    </div>
  );
}
