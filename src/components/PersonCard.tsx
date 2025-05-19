import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";
import type { Person } from "../types/StarWarsTypes";
import { Link } from "react-router";

type PersonProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonProps) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src={person.image_url}
          alt={person.name}
          className="fluid"
        />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
              <ListGroup.Item>Height: {person.height} cm</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Link
            to="/PersonPage"
            className="button btn btn-secondary"
            role="button"
          >
            {" "}
            Readm more
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default PersonCard;
