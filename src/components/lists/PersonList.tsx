import { useEffect, useState } from "react"
import type { Person } from "../../types/StarWarsTypes";
import { getAllPeople } from "../../services/StarWarsAPI";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router";


export const PersonList = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | false>(false);

   
        const fetchPeople = async () => {
            setError(false);
            setIsLoading(true);
            setPeople([]);

          try {
            const data = await getAllPeople(); 
            console.log("Fetched data:", data);
            setPeople(data.data);
          } catch (err) {
            console.error(`Error thrown when trying to get people:`, err);
			setError(err instanceof Error
				? err.message
				: "Something went wrong in the galaxy"
			);
		}
          setIsLoading(false);
        };

        useEffect(() => {
           fetchPeople();
        }, []);
    

  return (
    <>
        {isLoading && (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )}

        {!isLoading && error && (
            <Alert variant="danger">{error}</Alert>
        )}

        {!isLoading && people.length === 0 && (
				<Alert variant="warning">
					no people 😩
				</Alert>
			)}

        {!isLoading && people.length > 0 && ( 
				
					<ListGroup className="personlist">
						{people.map(people => (
							<ListGroup.Item
								action
								as={Link}
								key={people.id}
								to={`/person/${people.id}`}
							>
								<span className="todo-title">{people.name}</span>
							</ListGroup.Item>
						))}
					</ListGroup>

                    )}
    </>
  )
}
