import "./styles/LocationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <article className="location">
      <h2 className="location__name">{location?.name}</h2>
      <ul className="location__details">
        <li className="location__detail">
          <span className="location__detail-label">Type: </span>
          <span className="location__detail-value">{location?.type}</span>
        </li>
        <li className="location__detail">
          <span className="location__detail-label">Dimension: </span>
          <span className="location__detail-value">{location?.dimension}</span>
        </li>
        <li className="location__detail">
          <span className="location__detail-label">Population: </span>
          <span className="location__detail-value">
            {location?.residents.length}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
