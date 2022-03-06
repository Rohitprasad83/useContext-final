import { createContext, useState, useContext } from "react";
const cartLogger = () => console.log(`carting`);
const defaultValue = {
  cartItems: 4,
  logger: cartLogger
};
const CartContext = createContext(defaultValue);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems((carItems) => carItems + 1);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
