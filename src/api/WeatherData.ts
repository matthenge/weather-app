import axios from "axios";

const API_KEY: string = process.env.REACT_APP_WEATHER_DATA_API_KEY || "";
const API_URL: string = process.env.REACT_APP_WEATHER_DATA_API_URL || "";
const location: string = "Nairobi";

export const fetchWeatherData = async (): Promise<{
  temperature: number;
  conditions: string;
}> => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${location}&units=metric&appid=${API_KEY}`,
    );
    const { main, weather } = response.data;
    const { temp } = main;
    const { description } = weather[0];
    return {
      temperature: temp,
      conditions: description,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      temperature: 0,
      conditions: "Unknown",
    };
  }
};
