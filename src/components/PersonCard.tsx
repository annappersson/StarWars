import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";
import type { Person } from "../types/StarWarsTypes";

type PersonProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonProps) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={person.image_url} alt={person.name} />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Birth-Year: {person.birth_year}</ListGroup.Item>
              <ListGroup.Item>Height: {person.height} cm</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default PersonCard;
