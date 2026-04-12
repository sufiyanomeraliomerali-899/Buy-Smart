import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Upgrade your Tech</h1>
      <p>Best deals on mobiles & accessories</p>

      <button onClick={() => navigate("/")}>Shop Now</button>
    </div>
  );
}
