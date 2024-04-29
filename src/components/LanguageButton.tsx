import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../assets/styles/LanguageButton.css";

const LanguageButton: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
    changeLanguage();
  };

  return (
    <button
      className={`language-btn ${isToggled ? "en" : "sw"}`}
      onClick={handleClick}
    >
      <div className="thumb">{language === "en" ? "EN" : "SW"}</div>
      <div className="other-space">
        <div>{language === "en" ? "SW" : "EN"}</div>
        <div>{language === "en" ? "SW" : "EN"}</div>
      </div>
    </button>
  );
};

export default LanguageButton;
