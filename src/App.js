import "./styles.css";
import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { useTheme } from "./theme-context";
export default function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <h1>E-commerce</h1>
      <Cart />
      <ProductListing />
    </div>
  );
}
