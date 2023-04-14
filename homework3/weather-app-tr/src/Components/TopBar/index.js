import React from "react";
import DropDown from "../Dropdown";

import ForecastCard from "../WeatherForcast/ForecastCard";
function TopBar() {
  
  return (
    <div className="absolute z-10 top-8">
      <ForecastCard />
      <DropDown />
    </div>
  );
}

export default TopBar;
