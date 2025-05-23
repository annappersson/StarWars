import { useEffect, useState } from "react";
import type { Film } from "../types/StarWarsTypes";
import { getFilm } from "../services/StarWarsAPI";
import { useParams } from "react-router";
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import SingleFilmCard from "../components/SingleFilmCard";
import Navigation from "../components/Navigation";

const SingleFilmPage = () => {
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

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && !getFilmData && (
        <Alert variant="warning">no film 😩</Alert>
      )}

      {!isLoading && getFilmData && (
        <div className="film-container">
          <SingleFilmCard key={getFilmData.id} film={getFilmData} />
        </div>
      )}
    </>
  );
};

export default SingleFilmPage;
