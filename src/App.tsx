import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        {/*<h1>Weather Dashboard</h1>*/}
        <WeatherCard />
      </div>
    </LanguageProvider>
  );
};

export default App;
