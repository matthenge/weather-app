import axios from "axios";
import { fetchWeatherData } from "../api/WeatherData";

describe("fetchWeatherData", () => {
  it("should return weather data when API call is successful", async () => {
    const mockResponse = {
      data: {
        main: {
          temp: 20,
          humidity: 70,
          feels_like: 18,
          pressure: 1010,
        },
        weather: [{ main: "Clear", icon: "01d", description: "Clear sky" }],
        name: "Tokyo",
        wind: { speed: 5 },
        visibility: 10000,
        dt: 1651234567,
        sys: { sunrise: 1651234000, sunset: 1651278000 },
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const weatherData = await fetchWeatherData("Tokyo");

    expect(weatherData).toEqual({
      temperature: 20,
      conditions: "Clear",
      humidity: 70,
      cityName: "Tokyo",
      wind: 5,
      iconCode: "01d",
      description: "Clear sky",
      feelsLike: 18,
      visibility: 10000,
      pressure: 1010,
      timeStamp: 1651234567,
      sunrise: 1651234000,
      sunset: 1651278000,
      isSuccessful: true,
    });
  });

  it("should return default values when API call fails", async () => {
    axios.get = jest.fn().mockRejectedValue(new Error("API error"));

    const weatherData = await fetchWeatherData("InvalidCity");

    expect(weatherData).toEqual({
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
    });
  });
});
