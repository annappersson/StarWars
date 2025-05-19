import shipImg from "../assets/img/starWarsShip.gif";
import "../assets/scss/LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <>
      <div className="spinner img-fluid" role="status">
        <img src={shipImg} alt="Star wars ship flying" />

        <div className="loader-container">
          <span className="loader">Flying through the Galaxy</span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
