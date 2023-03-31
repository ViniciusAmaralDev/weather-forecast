import axios from "axios";

export const OpenWeatherMapAPI = axios.create({
  baseURL: "https://api.openweathermap.org",
});
