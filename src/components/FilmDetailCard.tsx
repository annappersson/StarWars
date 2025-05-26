import React from "react";
import type { Film } from "../types/StarWarsTypes";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import "../assets/scss/FilmDetailPage.scss";

interface FilmProps {
  film: Film;
}

const FilmDetailCard: React.FC<FilmProps> = ({ film }) => {
  return (
    <>
      <Card border="warning filmCardContainer">
        <div className="filmTopContainer">
          <Card className="film-card d-flex flex-row flex-wrap">
            <div className="film-image">
              <Card.Img variant="top" src={film.image_url} />
            </div>
            <Card.Body className="d-flex flex-column film-info">
              <Card.Title className="film-title">{film.title}</Card.Title>
              <Card.Text>{film.opening_crawl}</Card.Text>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item>
                  Release date: {film.release_date}
                </ListGroup.Item>
                <ListGroup.Item>producer: {film.producer}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>

        <div className="characthersContainer">
          <Card.Title className="character-title"> Characthers:</Card.Title>
          <ListGroup className="m-3">
            {film.characters?.map((characters) => (
              <ListGroup.Item
                className="listButton"
                action
                as={Link}
                key={characters.id}
                to={`/people/${characters.id}`}
                role="button"
              >
                <span className="character-name">{characters.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="mt-auto">
          <Link to="/films" className="btn btn-secondary" role="button">
            {" "}
            Go back
          </Link>
        </div>
      </Card>
    </>
  );
};

export default FilmDetailCard;
