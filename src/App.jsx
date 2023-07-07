import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${getRandomNumber(
      126
    )}`;
    axios
      .get(url)
      .then((res) => setLocation(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Rick and Morty App</h1>
      <LocationInfo location={location} />
      <div className="resident-container">
        {location?.residents.map((url) => (
          <ResidentCard key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
