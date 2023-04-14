import React, { useContext } from "react";
import MainContext from "../../Context/MainContext";

function ForecastCard() {
  const { forecast } = useContext(MainContext);
  return (
    <div>
      <div className=" text-white bg-black mb-4 rounded-md bg-opacity-40 flex gap-5">
        {forecast?.map((data, index) => {
          const date = new Date(data.dt_txt);
          const dayWeek = date.toLocaleDateString("en-US", {
            weekday: "long",
          });
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-20"
            >
              <p className="font-light text-md ">{dayWeek}</p>
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                className="w-16 my-1"
                alt=""
              />
              <p className="  font-light mb-3 ">
                <span>{Math.round(data.main.temp)}°C </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastCard;
