import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";
import PersonListPage from "./pages/PersonListPage";
import NotFoundPage from "./pages/NotFoundPage";
import FilmPage from "./pages/FilmPage";
import SinglePersonPage from "./pages/SinglePersonPage";
import SingleFilmPage from "./pages/SingleFilmPage";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/people" element={<PersonListPage />} />
        <Route path="/people/:id" element={<SinglePersonPage />} />
        <Route path="/films" element={<FilmPage />} />
        <Route path="/films/:id" element={<SingleFilmPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
