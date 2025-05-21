import shipImg from "../assets/img/starWarsShip.gif";
import "../assets/scss/LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <>
      <div className="spinner-container">
        <div className="spinner" role="status">
          <img
            src={shipImg}
            alt="Star wars ship flying"
            className="img-fluid"
          />
          <span className="loader">Flying through the Galaxy</span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
