import { useEffect, useState } from "react";
import type { ApiResponse, Film } from "../types/StarWarsTypes";
import { Alert } from "react-bootstrap";
import "../assets/scss/LoadingSpinner.scss";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import { getAllFilms } from "../services/StarWarsAPI";
import FilmCard from "./FilmCard";
import "../assets/scss/FilmListPage.scss";

const FilmList = () => {
  const [getResult, setGetResult] = useState<ApiResponse<Film[]> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);
  const [page, setPage] = useState(1);

  const fetchFilm = async (pageNumber: number) => {
    setError(false);
    setIsLoading(true);
    setGetResult(null);

    try {
      const data = await getAllFilms(pageNumber);
      setIsLoading(false);
      setGetResult(data);

      console.log("Fetched data:", data);
    } catch (err) {
      console.error(`Error thrown when trying to get films:`, err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong in the galaxy"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFilm(page);
  }, [page]);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && !getResult && (
        <Alert variant="warning">no films 😩</Alert>
      )}

      {!isLoading && getResult && (
        <>
          <div className="film-container">
            {getResult.data.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
          <div id="buttons">
            <Pagination
              page={getResult.current_page}
              totalPages={getResult.last_page}
              hasPreviousPage={page > 1}
              hasNextPage={page < getResult.last_page}
              onPreviousPage={() => setPage((p) => p - 1)}
              onNextPage={() => setPage((p) => p + 1)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FilmList;
