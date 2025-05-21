import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";
import PersonListPage from "./pages/PersonListPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePerson from "./components/SinglePerson";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/people" element={<PersonListPage />} />
        <Route path="/person" element={<SinglePerson />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
