import { useCart } from "./cart-context";

export function ProductListing() {
  const { addToCart } = useCart();
  return [1, 2, 3, 4].map((item) => (
    <>
      <h3 key={item}>Product {item}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </>
  ));
}
