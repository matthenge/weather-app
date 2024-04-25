import axios from 'axios';
import { fetchWeatherData } from '../api/WeatherData';

jest.mock('axios');

describe('fetchWeatherData', () => {
    it('fetches weather data successfully', async () => {
        const mockResponse = {
            data: {
                main: { temp: 25 },
                weather: [{ description: 'Sunny' }],
            },
        };

        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const result = await fetchWeatherData();

        expect(result).toEqual({
            temperature: 25,
            conditions: 'Sunny',
        });
    });

    it('handles error when fetching weather data', async () => {
        const mockError = new Error('Network error');
        (axios.get as jest.Mock).mockResolvedValue(mockError);

        const result = await fetchWeatherData();

        expect(result).toEqual({
            temperature: 0,
            conditions: 'Unknown',
        });
    });
});
