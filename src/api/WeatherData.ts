import axios from "axios";

const apiKey: string = process.env.REACT_APP_WEATHER_DATA_API_KEY || "";
const apiUrl: string = process.env.REACT_APP_WEATHER_DATA_API_URL || "";

export const fetchWeatherData = async (
  location: string,
): Promise<{
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
}> => {
  try {
    const response = await axios.get(
      `${apiUrl}?q=${location}&units=metric&appid=${apiKey}`,
    );
    const { main, weather, name, wind, visibility, dt, sys } = response.data;
    const { temp, humidity, feels_like, pressure } = main;
    return {
      temperature: temp,
      conditions: weather[0].main,
      humidity: humidity,
      cityName: name,
      wind: wind.speed,
      iconCode: weather[0].icon,
      description: weather[0].description,
      feelsLike: feels_like,
      visibility: visibility,
      pressure: pressure,
      timeStamp: dt,
      sunrise: sys.sunrise,
      sunset: sys.sunset,
      isSuccessful: true,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      temperature: 0,
      conditions: "",
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
    };
  }
};
