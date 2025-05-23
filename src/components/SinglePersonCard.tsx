import React from "react";
import type { Person } from "../types/StarWarsTypes";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

interface PersonProps {
  person: Person;
}

const SinglePersonCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <>
      <Card border="warning">
        <Card.Body className="d-flex flex-column">
          <Card.Img variant="top" src={person?.image_url} />
          <Card.Title>{person?.name}</Card.Title>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item>Birth-Year: {person?.birth_year}</ListGroup.Item>
            <ListGroup.Item>Height: {person?.height} cm</ListGroup.Item>
            <ListGroup className="filmlist">
              Films:
              {person?.films.map((films) => (
                <ListGroup.Item
                  action
                  as={Link}
                  key={films.id}
                  to={`/films/${films.id}`}
                >
                  <span className="film-title">{films.title}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* <ListGroup.Item>
              Films:
              <ul>{person?.films.map((x) => x.title).join(", ")}</ul>
            </ListGroup.Item> */}
          </ListGroup>

          <div className="mt-auto">
            <Link to="/people" className="btn btn-secondary" role="button">
              {" "}
              Go back
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SinglePersonCard;
