export const forecastWeatherApi = async (lat, long) => {
    const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";
    const API_KEY = import.meta.env.VITE_WEATHERAPI_API_KEY;
    const URL = `${BASE_URL}?key=${API_KEY}&q=${lat},${long}&days=4`;
  
    return await fetch(URL)
      .then((respone) => respone.json())
      .then((data) => {
        return data;
      });
  };