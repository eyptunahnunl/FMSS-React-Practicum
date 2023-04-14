import {
  UilArrowDown,
  UilArrowUp,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";

function DetailCard() {
  const { weather } = useContext(MainContext);

  // kod içinde tekrara düşmemek için burda apiden gelen datayı cardlara uygun tekrar döndürdüm.
  let detail = [];
  if (weather) {
    [weather].map((item) => {
      return detail.push([
        {
          name: "Real Fell",
          value: item.main.feels_like + " °C",
          icon: <UilTemperature />,
        },
        {
          name: "Humidity",
          value: item.main.humidity + " %",
          icon: <UilTear />,
        },
        {
          name: "Wind",
          value: item.wind.speed + " km/h",
          icon: <UilWind />,
        },
        {
          name: "Max Temp",
          value: item.main.temp_max + " °C",
          icon: <UilArrowUp />,
        },
        {
          name: "Min Temp",
          value: item.main.temp_min + " °C",
          icon: <UilArrowDown />,
        },
      ]);
    });
  }
  return (
    <div className="absolute right-7 top-11 z-20">
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col space-y-2 sm:flex-col">
        <h3>{weather && weather.name}</h3>
        <div className="flex flex-col space-y-2 sm:flex-col">
          {detail[0]?.map((weather, index) => {
            return (
              <div key={index} className="flex font-light text-sm items-center">
                {weather.icon}
                {weather.name}:
                <span className="font-medium ml-1">{weather.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
