import { useEffect, useState } from "react";
import type { Person } from "../types/StarWarsTypes";
import { getPerson } from "../services/StarWarsAPI";
import { useParams } from "react-router";
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import SinglePersonCard from "../components/PersonDetailCard";
import "../assets/scss/PersonDetailPage.scss";
import Navigation from "../components/Navigation";

const SinglePersonPage = () => {
  const [getPersonData, setGetPersonData] = useState<Person | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | false>(false);
  const { id } = useParams();
  const peopleId = Number(id);

  const fetchPerson = async (id: number) => {
    setError(false);
    setIsLoading(true);
    setGetPersonData(null);

    try {
      const data = await getPerson(id);

      console.log("Fetched data:", data);
      setGetPersonData(data);
    } catch (err) {
      console.error(`Error thrown when trying to get the person:`, err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong in the galaxy"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPerson(peopleId);
  }, [peopleId]);

  return (
    <>
      <Navigation />
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && !getPersonData && (
        <Alert variant="warning">no people 😩</Alert>
      )}

      {!isLoading && getPersonData && (
        <div className="personCard-container">
          <SinglePersonCard key={getPersonData.id} person={getPersonData} />
        </div>
      )}
    </>
  );
};

export default SinglePersonPage;
