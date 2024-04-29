import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import WeatherCard from "./components/WeatherCard";
import "./assets/styles/App.css";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App" data-testid="App">
        <WeatherCard />
      </div>
    </LanguageProvider>
  );
};

export default App;
