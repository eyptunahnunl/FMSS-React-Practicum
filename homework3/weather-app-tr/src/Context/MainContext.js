import { createContext, useEffect, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [location, setLocation] = useState('39.9,32');
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  useEffect(() => {
    async function fetchForecast() {
      try {
        const [lat, lon] = location.split(",");
            
        const url = `${process.env.REACT_APP_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  
        const response = await fetch(url);
        const data = await response.json();
        setForecast(data.list.filter((data) => data.dt_txt.includes("12:00:00")));
  
        const weatherUrl = `${process.env.REACT_APP_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  
        const responseWeather = await fetch(weatherUrl)
        const dataWeather = await responseWeather.json()
        setWeather(dataWeather);
      } catch (error) {
        console.log(error);
      }

     
    }
    fetchForecast();
  }, [location]);

  

  const data = {
    location,setLocation,
    forecast,setForecast,
    weather,setWeather
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default MainContext;
