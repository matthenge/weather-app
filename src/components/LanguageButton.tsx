import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageButton: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <button onClick={changeLanguage}>
      {language === "en" ? "English" : "Swahili"}
    </button>
  );
};

export default LanguageButton;
