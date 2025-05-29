import { useEffect, useState } from "react";
import type { Film } from "../types/StarWarsTypes";
import { getFilm } from "../services/StarWarsAPI";
import { useParams } from "react-router";
import { Alert, Image } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import FilmDetailCard from "../components/FilmDetailCard";
import Navigation from "../components/Navigation";
import darkSidevader from "../assets/img/darthvader1.gif";
import vaderKitty from "../assets/img/catVader.gif";

const FilmDetailPage = () => {
  const [getFilmData, setGetFilmData] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);
  const { id } = useParams();
  const filmId = Number(id);

  const fetchFilm = async (id: number) => {
    setError(false);
    setIsLoading(true);
    setGetFilmData(null);

    try {
      const data = await getFilm(id);

      console.log("Fetched data:", data);
      setGetFilmData(data);
    } catch (err) {
      console.error(`Error thrown when trying to get the person:`, err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong in the galaxy"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFilm(filmId);
  }, [filmId]);

  return (
    <>
      <Navigation />
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && (
        <div className="danger">
          <Image src={darkSidevader} alt="Darth Vader" />
          <Alert variant="danger">{error}</Alert>
        </div>
      )}

      {!isLoading && !error && !getFilmData && (
        <>
          <div className="waring">
            <Image src={vaderKitty} alt="A kitty holding lightsaber" />
            <Alert variant="warning">no film found in this galaxy😩</Alert>
          </div>
        </>
      )}

      {!isLoading && getFilmData && (
        <div className="film-container">
          <FilmDetailCard key={getFilmData.id} film={getFilmData} />
        </div>
      )}
    </>
  );
};

export default FilmDetailPage;
