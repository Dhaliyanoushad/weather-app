import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  const formatHeadingBackground = () => {
    if (!weather) return "bg-blue-500";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "bg-blue-500";

    return "bg-orange-500";
  };

  const formatDetails = () => {
    if (!weather) return "text-cyan-300";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "text-cyan-300";

    return "text-yellow-300";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md self-center md:my-4 md:h-fit h-screen my-auto py-5 md:px-32 px-14 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <Heading bg={formatHeadingBackground()} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} detailsbg={formatDetails()} />
          <Forecast title="daily" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
