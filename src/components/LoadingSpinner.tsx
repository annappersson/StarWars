import loadingImg from "../assets/img/212352.gif";
import "../assets/scss/LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner" role="status">
      <img src={loadingImg} alt="StormTrooper" className="img-fluid" />
      <span className="loader">Loading the galaxy for information</span>
    </div>
  );
};

export default LoadingSpinner;
