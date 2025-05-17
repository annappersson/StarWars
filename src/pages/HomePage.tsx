import { Link } from "react-router";
import "../assets/scss/HomePage.scss";


export const HomePage = () => {
  return (
    <main className="star-background">
        <div className="intro-text">
          <h1>
            The ultimate <span className="h1-style">Star Wars</span>{" "}
            encyclopedia
          </h1>
          <p className="paragraf">
            Are you ready to fly through the galaxy to find all the information
            you need about the universe?
          </p>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="button-container">
            <Link to="/Main" className="button btn btn-secondary" role="button">
                    {" "}
                    Lets fly!🚀
            </Link>
        </div>
           
      </main>
  )
}

export default HomePage;
