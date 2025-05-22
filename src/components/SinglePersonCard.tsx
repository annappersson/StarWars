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
            <ListGroup.Item>
              Films: {person?.films.map((x) => x.title).join(", ")}
            </ListGroup.Item>
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
