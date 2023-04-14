import "./App.css";
import { MainProvider } from "./Context/MainContext";
import DetailCard from "./Components/WeatherForcast/DetailCard";
import TopBar from "./Components/TopBar";
import Map from "./Components/Map";
function App() {
  return (
    <MainProvider>
      <div className="flex-auto relative">
        <TopBar />
        <DetailCard />
        <Map />
      </div>
    </MainProvider>
  );
}

export default App;
