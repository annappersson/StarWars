import { Card, CardGroup, ListGroup, Nav } from "react-bootstrap";
import type { Film } from "../types/StarWarsTypes";
import { NavLink } from "react-router";

interface FilmProps {
  film: Film;
}

const FilmCard: React.FC<FilmProps> = ({ film }) => {
  return (
    <CardGroup>
      <Card border="warning">
        <Card.Img variant="top" src={film.image_url} alt={film.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{film.title}</Card.Title>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>
            <ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
          </ListGroup>

          <div className="mt-auto">
            <Nav.Link
              as={NavLink}
              to="/film"
              className="btn btn-secondary w-100"
              role="button"
            >
              Read more
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default FilmCard;
