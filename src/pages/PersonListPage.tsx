import { useEffect, useState } from "react";
import type { ApiResponse, Person } from "../types/StarWarsTypes";
import { getAllPeople } from "../services/StarWarsAPI";
import { Alert } from "react-bootstrap";
import "../assets/scss/LoadingSpinner.scss";
import "../assets/scss/PersonListPage.scss";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import PersonCard from "../components/PersonCard";
import Navigation from "../components/Navigation";

const PersonListPage = () => {
  const [getResult, setGetResult] = useState<ApiResponse<Person[]> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);
  const [page, setPage] = useState(1);

  const fetchPeople = async (pageNumber: number) => {
    setError(false);
    setIsLoading(true);
    setGetResult(null);

    try {
      const data = await getAllPeople(pageNumber);
      setIsLoading(false);
      setGetResult(data);

      console.log("Fetched data:", data);
    } catch (err) {
      console.error(`Error thrown when trying to get people:`, err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong in the galaxy"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPeople(page);
  }, [page]);

  return (
    <>
      <Navigation />
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && !getResult && (
        <Alert variant="warning">no people 😩</Alert>
      )}

      {!isLoading && getResult && (
        <>
          <div className="person-container">
            {getResult.data.map((person) => (
              <PersonCard key={person.id} person={person} />
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

export default PersonListPage;
