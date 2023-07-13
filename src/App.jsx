import "./App.css";
import { useState, useEffect } from "react";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import Pagination from "./components/Pagination";
import useFetch from "./hooks/useFetch";

function App() {


  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [currentPage, setCurrentPage] = useState(1);
  const [residentsPerPage] = useState(8);

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
  const [location, getSingLocation, hasError, isloading]= useFetch(url)

  useEffect(() => {
    getSingLocation()
  }, [idLocation]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="header"></div>
      <FormLocation setIdLocation={setIdLocation} />

      {isloading ? (
        <div className="Loader">
          <div className="Loader__Countainer">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>
        </div>
      ) : hasError ? (
        <h1 className="error-message">
          <i className="bx bx-error-circle"></i>Hey! you mus provide an id from
          1 to 126 🥹
        </h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents
              .slice(
                (currentPage - 1) * residentsPerPage,
                currentPage * residentsPerPage
              )
              .map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              location?.residents.length / residentsPerPage
            )}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
