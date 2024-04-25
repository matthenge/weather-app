// WeatherCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';

describe('WeatherCard', () => {
    it('renders temperature and conditions', () => {
        const weatherData = {
            temperature: 25,
            conditions: 'Sunny',
            location: 'Nairobi',
        };

        const { getByText } = render(<WeatherCard {...weatherData} />);

        expect(getByText(/25°C/)).toBeInTheDocument();
        expect(getByText(/Sunny/)).toBeInTheDocument();
    });
});
