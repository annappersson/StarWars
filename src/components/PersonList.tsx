import { useEffect, useState } from "react";
import type { ApiResponse, Person } from "../types/StarWarsTypes";
import { getAllPeople } from "../services/StarWarsAPI";
import { Alert, ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import "../assets/scss/LoadingSpinner.scss";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";

export const PersonList = () => {
  const [searchResult, setSearchResult] = useState<ApiResponse<Person> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);
  const [page, setPage] = useState(1);

  const fetchPeople = async () => {
    setError(false);
    setIsLoading(true);
    setSearchResult(null);

    try {
      const data = await getAllPeople(page);
      setIsLoading(false);
      setSearchResult(data);

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
    fetchPeople();
  }, [page]);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && !searchResult && (
        <Alert variant="warning">no people 😩</Alert>
      )}

      {!isLoading && searchResult && (
        <div id="search-result">
          <ListGroup className="personlist">
            {searchResult.data.map((person) => (
              <ListGroup.Item
                action
                as={Link}
                key={person.id}
                to={`/person/${person.id}`}
              >
                <span className="todo-title">{person.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Pagination
            page={searchResult.current_page}
            totalPages={searchResult.last_page}
            hasPreviousPage={page > 1}
            hasNextPage={page < searchResult.last_page}
            onPreviousPage={() => setPage((p) => p - 1)}
            onNextPage={() => setPage((p) => p + 1)}
          />
        </div>
      )}
    </>
  );
};
