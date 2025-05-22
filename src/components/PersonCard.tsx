import { Card, CardGroup, ListGroup, Nav } from "react-bootstrap";
import type { Person } from "../types/StarWarsTypes";
import { NavLink } from "react-router";

interface PersonProps {
  person: Person;
}

const PersonCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <CardGroup>
      <Card border="warning">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{person.name}</Card.Title>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
            <ListGroup.Item>Height: {person.height} cm</ListGroup.Item>
          </ListGroup>

          <div className="mt-auto">
            <Nav.Link
              as={NavLink}
              key={person.id}
              to={`/people/${person.id}`}
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

export default PersonCard;
