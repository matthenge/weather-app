import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import LoadingOverlay from "react-loading-overlay-ts";
import { useLanguage } from "../context/LanguageContext";
import SearchBar from "./SearchBar";
import { fetchWeatherData } from "../api/WeatherData";
import "../assets/styles/WeatherCard.css";
import { formatTimestamp } from "../utils/dateTimeUtils";
import cloud_icon from "../assets/images/cloud.png";
import clear_icon from "../assets/images/clear.png";
import rain_icon from "../assets/images/rain.png";
import humidity_icon from "../assets/images/humidity.png";
import drizzle_icon from "../assets/images/drizzle.png";
import wind_icon from "../assets/images/wind.png";
import pressure_icon from "../assets/images/barometer.png";
import sunrise_icon from "../assets/images/sunrise.png";
import sunset_icon from "../assets/images/sunset.png";
import temperature_icon from "../assets/images/temperature.png";
import snow_icon from "../assets/images/snow.png";
import thunderstorm_icon from "../assets/images/thunderstorm.png";
import visibility_icon from "../assets/images/visibility.png";
import ErrorPage from "./ErrorPage";

interface WeatherData {
  temperature: number;
  conditions: string;
  humidity: number;
  cityName: string;
  wind: number;
  iconCode: string;
  description: string;
  feelsLike: number;
  visibility: number;
  pressure: number;
  timeStamp: number;
  sunrise: number;
  sunset: number;
  isSuccessful: boolean;
}

const WeatherCard: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>("Nairobi");
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    conditions: "",
    temperature: 0,
    humidity: 0,
    cityName: "",
    wind: 0,
    iconCode: "",
    description: "",
    feelsLike: 0,
    visibility: 0,
    pressure: 0,
    timeStamp: 0,
    sunrise: 0,
    sunset: 0,
    isSuccessful: false,
  });
  const now = dayjs().format("h:mm A");
  const [weatherIcon, setWeatherIcon] = useState<string>(clear_icon);
  const { language } = useLanguage();
  const messages = require(`../locales/${language}.json`);

  const handleIcon = (iconCode: string) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        setWeatherIcon(clear_icon);
        break;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWeatherIcon(cloud_icon);
        break;
      case "09d":
      case "09n":
        setWeatherIcon(drizzle_icon);
        break;
      case "10d":
      case "10n":
        setWeatherIcon(rain_icon);
        break;
      case "11d":
      case "11n":
        setWeatherIcon(thunderstorm_icon);
        break;
      case "13d":
      case "13n":
        setWeatherIcon(snow_icon);
        break;
      default:
        setWeatherIcon(clear_icon);
        break;
    }
  };

  const handleSearch = async (city: string) => {
    const data = await fetchWeatherData(city);
    handleIcon(data.iconCode);
    await setWeatherData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    handleSearch(searchItem).then((r) => {
      console.log(r);
    });
  }, [searchItem]);

  return (
    <LoadingOverlay
      className="loader"
      active={loading}
      spinner
      text="Fetching weather data"
    >
      <div className="weather-card">
        <SearchBar onSearch={setSearchItem} location={weatherData.cityName} />
        {weatherData.isSuccessful ? (
          <>
            <div className="location-details">{weatherData.cityName}</div>
            <div className="main-section">
              <div className="weather-summary">
                <div className="summary-header">
                  <div className="weather-text">{messages.current}</div>
                  <div>{now}</div>
                </div>
                <div>
                  <hr className="divider" />
                </div>
                <div className="main-summary">
                  <div className="weather-icon">
                    <img src={weatherIcon} alt="Weather Icon" />
                  </div>
                  <div>
                    <div className="main-temp">
                      {Math.floor(weatherData.temperature)}°C
                    </div>
                  </div>
                  <div className="summary-details">
                    <div className="summary-conditions">
                      {weatherData.conditions}
                    </div>
                    <div>
                      {messages.feelsLike} {Math.floor(weatherData.feelsLike)}°C
                    </div>
                  </div>
                </div>
                <div className="summary-footer">
                  <div>{weatherData.description}</div>
                </div>
              </div>
              <div className="weather-details">
                <div className="details">{messages.details}</div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={temperature_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.temperature}</div>
                    <div className="element-value">
                      {Math.floor(weatherData.temperature)}°C
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={humidity_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.humidity}</div>
                    <div className="element-value">{weatherData.humidity}%</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={weatherIcon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.conditions}</div>
                    <div className="element-value">
                      {weatherData.conditions}
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={wind_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.wind}</div>
                    <div className="element-value">
                      {Math.floor(weatherData.wind)} km/h
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={pressure_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.pressure}</div>
                    <div className="element-value">
                      {weatherData.pressure} hPa
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={sunrise_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.sunrise}</div>
                    <div className="element-value">
                      {formatTimestamp(weatherData.sunrise)}
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={sunset_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.sunset}</div>
                    <div className="element-value">
                      {formatTimestamp(weatherData.sunset)}
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">
                    <img src={visibility_icon} alt="weather element" />
                  </div>
                  <div className="element-details">
                    <div className="element-name">{messages.visibility}</div>
                    <div className="element-value">
                      {Math.floor(weatherData.visibility / 1000)} km
                    </div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
              </div>
            </div>
          </>
        ) : (
          !loading && <ErrorPage />
        )}
      </div>
    </LoadingOverlay>
  );
};

export default WeatherCard;
