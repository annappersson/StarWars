import React from "react";
import type { Film } from "../types/StarWarsTypes";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

interface FilmProps {
  film: Film;
}

const FilmDetailCard: React.FC<FilmProps> = ({ film }) => {
  return (
    <>
      <Card border="warning">
        <Card.Body className="d-flex flex-column">
          <Card.Img variant="top" src={film.image_url} />
          <Card.Title>{film.title}</Card.Title>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>
            <ListGroup.Item>producer: {film.producer}</ListGroup.Item>
            <ListGroup className="Charactherslist">
              Characthers:
              {film.characters?.map((characters) => (
                <ListGroup.Item
                  action
                  as={Link}
                  key={characters.id}
                  to={`/people/${characters.id}`}
                >
                  <span className="character-name">{characters.name}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup>

          <div className="mt-auto">
            <Link to="/films" className="btn btn-secondary" role="button">
              {" "}
              Go back
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default FilmDetailCard;
