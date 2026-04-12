import { useState } from "react";
import Api from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Api.post("/auth/register", form);

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handelSubmit}>
        <input
          placeholder="Enter Your Name"
          id="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Enter Your email"
          id="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Enter Your password"
          id="password"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
        <button>Register</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
