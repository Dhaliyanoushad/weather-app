# WeatherApp

A simple weather application built using React and styled with Tailwind CSS. This app allows users to search for the current weather in any city and view key weather details, including temperature, humidity, wind speed, and weather conditions.

## Features

- Search for weather by city name.
- Display current temperature, humidity, wind speed, and weather conditions.
- Styled using Tailwind CSS for responsive and modern UI.
- Fetch weather data using an external API.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **OpenWeather API**: Provides weather data for cities.
- **Netlify**: Hosting platform for fast and easy deployment.

## Demo

The app is live! Check it out here: [WeatherApp on Netlify](https://responsivee-weather-app.netlify.app)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dhaliyanoushad/weather-app
    cd weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create an `.env` file in the root of the project and add your OpenWeather API key:
    ```
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

4. Run the application locally:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. Enter the name of any city in the search bar.
2. Click the "Search" button to view the current weather details of that city.
3. The weather data displayed includes:
   - Current temperature (in Celsius or Fahrenheit, depending on your settings)
   - Humidity
   - Wind speed
   - Weather condition (e.g., clear, cloudy, rainy)

## Deployment to Netlify

1. Push your code to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com) and log in or sign up.
3. Create a new site by connecting your GitHub repository.
4. Set the build command to `npm run build` and the publish directory to `build/`.
5. Add the `REACT_APP_WEATHER_API_KEY` environment variable in the Netlify site settings.
6. Deploy the site, and you're live!
