import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useState } from "react";
import "./navbar.css";

const Navbar = ({ setSearch, setSort }) => {
  const [input, setInput] = useState("");
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navSec1">
        <h2>
          <span className="buyText">Buy</span>{" "}
          <span className="smartText">Smart</span>
        </h2>

        <div className="navLinks">
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Cart ({totalItems})</Link>
          <button className="mobileLogout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="navContainer">
        <div>
          <input
            placeholder="Search what you want"
            type="text"
            value={input}
            onChange={handleSearch}
          />

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">sort</option>
            <option value="low">Price low to high</option>
            <option value="high">Price high to low</option>
          </select>
        </div>
      </div>

      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
