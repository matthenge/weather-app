import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface WeatherCardProps {
  temperature: number;
  conditions: string;
  location: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  conditions,
  location,
}) => {
  const { language } = useLanguage();
  const messages = require(`../locales/${language}.json`);

  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <p>
        {messages.temperature}: {temperature}°C
      </p>
      <p>
        {messages.conditions}: {conditions}
      </p>
    </div>
  );
};

export default WeatherCard;
