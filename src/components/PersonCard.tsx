import { Card, CardGroup, ListGroup, Nav } from "react-bootstrap";
import type { Person } from "../types/StarWarsTypes";
import { NavLink } from "react-router";

type PersonProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonProps) => {
  return (
    <CardGroup>
      <Card className="h-100">
        {/* <Card.Img variant="top" src={person.image_url} alt={person.name} /> */}
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
              <ListGroup.Item>Height: {person.height} cm</ListGroup.Item>
            </ListGroup>
          </Card.Text>

          <Nav.Link
            as={NavLink}
            to="/person"
            className="btn btn-secondary mt-auto"
            role="button"
          >
            Read more
          </Nav.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default PersonCard;
