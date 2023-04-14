import { useContext } from "react";
import { cityData } from "../Data/adressData";
import MainContext from "../../Context/MainContext";
function DropDown() {
  const { setLocation } = useContext(MainContext);
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setLocation(e.target.value)}
      >
        <option>Choose a City</option>
        {cityData.map((city) => (
          <option value={[city.latitude, city.longitude]} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default DropDown;
