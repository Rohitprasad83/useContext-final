import { createContext, useContext, useState } from "react";

const LocalizeContext = createContext({ lang: "english" });

const LocalizeContextProvider = ({ children }) => {
  const [lang, setLang] = useState("english");

  const changeLang = () => {
    setLang(lang === "english" ? "hindi" : "english");
  };
  return (
    <LocalizeContext.Provider value={{ lang, changeLang }}>
      {children}
    </LocalizeContext.Provider>
  );
};

const useLocalization = () => useContext(LocalizeContext);

export { useLocalization, LocalizeContextProvider };
