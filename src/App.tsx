import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import WeatherCard from "./components/WeatherCard";
import LanguageButton from "./components/LanguageButton";

const App: React.FC = () => {
  const weatherData = {
    temperature: 25,
    conditions: "Sunny",
    location: "Nairobi",
  };

  return (
    <LanguageProvider>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <LanguageButton />
        <WeatherCard {...weatherData} />
      </div>
    </LanguageProvider>
  );
};

export default App;
