import { useCart } from "./cart-context";
import { languageLib } from "./languageLib";
import { useLocalization } from "./localize-context";
import { useTheme } from "./theme-context";
export function Cart() {
  const { cartItems, logger } = useCart();
  const { changeTheme } = useTheme();
  const { lang, changeLang } = useLocalization();

  return (
    <div>
      <h1 onClick={logger}>{`${languageLib[lang]["cart"]} ${cartItems}`}</h1>
      <h3>Language is {lang}</h3>
      <button onClick={changeTheme}>Change Mode</button>
      <button onClick={changeLang}>Change Language</button>
    </div>
  );
}
