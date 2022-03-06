import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./cart-context";
import { LocalizeContextProvider } from "./localize-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalizeContextProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalizeContextProvider>
  </StrictMode>,
  rootElement
);
