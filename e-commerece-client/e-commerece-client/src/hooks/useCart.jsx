import { useContext } from "react";
import { CartContext } from "../context/createContext.jsx";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
