import axios from "axios";

const URL = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/weather",
};

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL.base, {
    params: {
      q: query,
      units: "metric",
      APPID: URL.key,
    },
  });
  return data;
};
