import React, { useState } from "react";
import "../assets/styles/SearchBar.css";
import search_icon from "../assets/images/search.png";
import LanguageButton from "./LanguageButton";

interface SearchBarProps {
  onSearch: (city: string) => void;
  location: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, location }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
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
          />
          <div className="search-btn" onClick={handleSearch}>
            <img src={search_icon} alt="Search Icon" />
          </div>
        </div>
        <div>
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
