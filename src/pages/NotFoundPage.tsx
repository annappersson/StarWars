import Image from "react-bootstrap/Image";
import sadR2 from "../assets/img/sadR2.gif";
import "../assets/scss/NotFoundPage.scss";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <div className="notFound">
        <Image className="r2Img" src={sadR2} alt="Sad R2-d2" fluid />
        <h1>Sorry, that galaxy could not be found 😔</h1>

        <div className="goBack">
          <Link to="/Main" className="btn btn-secondary" role="button">
            {" "}
            I want to fly back🛸
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
