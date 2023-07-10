import getRandomNumber from "../utils/getRandomNumber";
import "./styles/FormLocation.css";

const FormLocation = ({ setIdLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputId.value.trim();
    if (inputValue === "" || inputValue === "0") {
      setIdLocation(getRandomNumber(126));
    } else {
      setIdLocation(inputValue);
    }

    e.target.inputId.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="form-location">
      <input
        className="form-location__input"
        id="inputId"
        style={{ boxShadow: "1px 1px 10px" }}
        type="text"
        placeholder="values (1 - 126)"
      />
      <button
        className="form-location__button"
      >
        Search
      </button>
    </form>
  );
};

export default FormLocation;
