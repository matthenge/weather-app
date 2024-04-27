import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../assets/styles/LanguageButton.css";

const LanguageButton: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <button className="language-btn" onClick={changeLanguage}>
      {language === "en" ? "English" : "Swahili"}
    </button>
  );
};

export default LanguageButton;
