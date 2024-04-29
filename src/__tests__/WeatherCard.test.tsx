import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

jest.mock("../api/WeatherData", () => ({
  fetchWeatherData: jest.fn(() => ({
    conditions: "Clear",
    temperature: 72,
    humidity: 60,
    cityName: "Nairobi",
    wind: 5,
    iconCode: "02d",
    description: "Sunny day",
    feelsLike: 75,
    visibility: 10,
    pressure: 1015,
    timeStamp: 1620000000,
    sunrise: 1619980000,
    sunset: 1620030000,
    isSuccessful: true,
  })),
}));

describe("WeatherCard component", () => {
  it("renders without errors", () => {
    render(<WeatherCard />);
    const loadingOverlay = screen.getByText("Fetching weather data");
    expect(loadingOverlay).toBeInTheDocument();
  });

  it("displays loading overlay when loading is true", () => {
    render(<WeatherCard />);
    const loadingOverlay = screen.getByText("Fetching weather data");
    expect(loadingOverlay).toBeInTheDocument();
  });
});
