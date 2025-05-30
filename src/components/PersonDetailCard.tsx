import React from "react";
import type { Person } from "../types/StarWarsTypes";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

interface PersonProps {
  person: Person;
}

const PersonDetialCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <Card className="person-card d-flex flex-row flex-wrap" border="warning">
      <div className="person-image">
        <Card.Img variant="top" src={person.image_url} />
      </div>
      <Card.Body className="d-flex flex-column person-info">
        <Card.Title className="person-title">{person.name}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
          <ListGroup.Item>Height: {person?.height} cm</ListGroup.Item>
          <ListGroup.Item>Hair-color: {person?.hair_color}</ListGroup.Item>
          <ListGroup.Item>Eye-Color: {person?.eye_color}</ListGroup.Item>
        </ListGroup>

        <div className="mt-3">
          <Card.Title className="movie-title">In movies:</Card.Title>
          <ListGroup>
            {person.films.map((films) => (
              <ListGroup.Item
                className="listButton"
                action
                as={Link}
                key={films.id}
                to={`/films/${films.id}`}
                role="button"
              >
                <span className="film-title">{films.title}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="mt-auto">
          <Link
            to="/people"
            id="PersonBtn"
            className="btn btn-secondary"
            role="button"
          >
            {" "}
            Go back
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonDetialCard;
