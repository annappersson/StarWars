import { Pagination } from "react-bootstrap";
import { PersonList } from "../components/PersonList";

export const PersonListPage = () => {
  return (
    <>
      <PersonList />

      <Pagination />
    </>
  );
};

export default PersonListPage;
