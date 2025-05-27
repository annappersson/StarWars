import Navigation from "../components/Navigation";
import "../assets/scss/MainPage.scss";

export const MainPage = () => {
  return (
    <div className="mainWrapper">
      <Navigation />
      <div className="MainContainer">
        <div className="textContainer">
          <div className="welcomeText">Welcome, Traveler of the Galaxy!</div>

          <p>
            You've just landed on the Star Wars Encyclopedia, the one place in
            the galaxy where you won't have to bother BB-8 with all your burning
            questions. Here, you'll find all the Star Wars knowledge you need,
            <br />
            May the facts be with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
