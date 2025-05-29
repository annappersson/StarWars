import { useEffect, useState } from "react";
import type { Person } from "../types/StarWarsTypes";
import { getPerson } from "../services/StarWarsAPI";
import { useParams } from "react-router";
import { Alert, Image } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import PersonDetailCard from "../components/PersonDetailCard";
import "../assets/scss/PersonDetailPage.scss";
import Navigation from "../components/Navigation";
import darkSidevader from "../assets/img/darthvader1.gif";
import vaderKitty from "../assets/img/catVader.gif";

const PersonDetailPage = () => {
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

      {!isLoading && error && (
        <div className="danger">
          <Image src={darkSidevader} alt="Darth Vader" />
          <Alert variant="danger">{error}</Alert>
        </div>
      )}

      {!isLoading && !error && !getPersonData && (
        <>
          <div className="waring">
            <Image src={vaderKitty} alt="A kitty holding lightsaber" />
            <Alert variant="warning">no people found in this galaxy😩</Alert>
          </div>
        </>
      )}

      {!isLoading && getPersonData && (
        <div className="personCard-container">
          <PersonDetailCard key={getPersonData.id} person={getPersonData} />
        </div>
      )}
    </>
  );
};

export default PersonDetailPage;
