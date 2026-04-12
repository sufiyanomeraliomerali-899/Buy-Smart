import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/axios";
import "./auth.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Api.post("/auth/login", form);

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Login</button>

        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
