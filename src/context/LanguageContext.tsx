import React, { createContext, useContext, useState } from "react";

enum Language {
  EN = "en",
  SW = "sw",
}

interface Props {
  children: React.ReactNode;
}

const LanguageContext = createContext<{
  language: Language;
  changeLanguage: () => void;
}>({
  language: Language.EN,
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const changeLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === Language.EN ? Language.SW : Language.EN,
    );
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
