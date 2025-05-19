import { useEffect, useState } from "react";
import type { Person } from "../types/StarWarsTypes";
import { getAllPeople } from "../services/StarWarsAPI";
import { Alert, ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import shipImg from "../assets/img/starWarsShip.gif";
import "../assets/scss/LoadingSpinner.scss";

export const PersonList = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);

  const fetchPeople = async () => {
    setError(false);
    setIsLoading(true);

    try {
      const data = await getAllPeople();
      setIsLoading(false);
      setPeople(data.data);

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
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spinner" role="status">
          <img src={shipImg} alt="Star wars ship flying" />
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && people.length <= 0 && (
        <Alert variant="warning">no people 😩</Alert>
      )}

      {!isLoading && people.length > 0 && (
        <ListGroup className="personlist">
          {people.map((people) => (
            <ListGroup.Item
              action
              as={Link}
              key={people.id}
              to={`/person/${people.id}`}
            >
              <span className="todo-title">{people.name}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};
