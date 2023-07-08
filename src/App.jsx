import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setisloading(true);
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      })

      .finally(() => {
        setisloading(false);
      });
  }, [idLocation]);

  return (
    <div>
      <h1>Rick and Morty App</h1>
      <FormLocation setIdLocation={setIdLocation} />

      {isloading ? (
        <div className="Loader">
          <div className="loader">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>
        </div>
      ) : hasError ? (
        <h1>❌Hey! you mus provide an id from 1 to 126 🥹</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
