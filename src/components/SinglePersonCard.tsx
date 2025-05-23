import React from "react";
import type { Person } from "../types/StarWarsTypes";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

interface PersonProps {
  person: Person;
}

const SinglePersonCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <Card className="person-card d-flex flex-row flex-wrap">
      <div className="person-image">
        <Card.Img variant="top" src={person.image_url} />
      </div>
      <Card.Body className="d-flex flex-column person-info">
        <Card.Title>{person.name}</Card.Title>
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
          <ListGroup.Item>Height: {person?.height} cm</ListGroup.Item>
          <ListGroup.Item>Hair-color: {person?.hair_color}</ListGroup.Item>
          <ListGroup.Item>Eye-Color: {person?.eye_color}</ListGroup.Item>
          <ListGroup>
            <Card.Title>In movies:</Card.Title>
            {person.films.map((films) => (
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
        </ListGroup>

        <div className="mt-auto">
          <Link to="/people" className="btn btn-secondary" role="button">
            {" "}
            Go back
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SinglePersonCard;
