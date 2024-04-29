# Weather Application

This project is hosted here:

https://matthenge.github.io/weather-app/

- This project was done using Javascript, Typescript, React and CSS.
- It was deployed to Github pages.
- It was developed using Airbnb JavaScript Style Guide which can be found [here](https://airbnb.io/javascript/react/).
- The weather api used was from OpenWeather API [here](https://openweathermap.org/api)
- Unit tests were done using React Testing Library and Jest.
- Linting was done using ESLint and Prettier.

## Local Development Setup

### Clone the Repository [here](https://github.com/matthenge/weather-app.git)

```
$ git clone https://github.com/matthenge/weather-app.git
```

### Move in to the Project Directory (Main Branch)

```
$ cd weather-app
```

### Install dependencies

#### `npm install` or `yarn install`

### Create a .env file in the root folder and set variables in the env.example

```
 REACT_APP_WEATHER_DATA_API_KEY=api-key
 REACT_APP_WEATHER_DATA_API_URL=https://api.example.com
```
Both variables can be obtained from OpenWeather API [here](https://openweathermap.org/api)

### Run Application (Development mode)

#### `npm run start` or `yarn start`

### Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
- The weather data for "Nairobi", should initially load.
- Weather data for any other city can be fetched by searching
```

### Run Tests and test coverage

#### `npm run test` or `yarn test`

### Run Linting

#### `npm run lint` or `yarn lint` for linting OR

#### `npm run test:fix` or `yarn test:fix` to lint and fix errors

