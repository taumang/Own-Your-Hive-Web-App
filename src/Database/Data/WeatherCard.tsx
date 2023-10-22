import React, { useEffect, useState } from 'react';

const api = {
  key: "77278187e14ff4191735bfb0e76d7643",
  base: "https://api.openweathermap.org/data/2.5/"
};

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
        .then(res => res.json())
        .then(data => setWeatherData(data));
    });

    const fadeTimeout = setTimeout(() => setFade(true), 30000);  
    return () => clearTimeout(fadeTimeout);  
  }, []);

  if (!weatherData) return null;

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-white rounded shadow-lg ${fade ? 'opacity-50' : ''}`}>
      <h2 className="text-xl font-bold">{weatherData.name}</h2>  
      <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>{weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;