import React, { useState } from "react";
import "../assets/styles/SearchBar.css";
import LanguageButton from "./LanguageButton";

interface SearchBarProps {
  onSearch: (city: string) => void;
  location: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, location }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="location-name">{location}</div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
        <div className="language-switcher">
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
