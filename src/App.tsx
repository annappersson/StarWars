import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";
import PersonListPage from "./pages/PersonListPage";
import NotFoundPage from "./pages/NotFoundPage";
import FilmPage from "./pages/FilmPage";
import PersonDetailPage from "./pages/PersonDetailPage";
import FilmDetailPage from "./pages/FilmDetailPage";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/people" element={<PersonListPage />} />
        <Route path="/people/:id" element={<PersonDetailPage />} />
        <Route path="/films" element={<FilmPage />} />
        <Route path="/films/:id" element={<FilmDetailPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
