import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";
import PersonListPage from "./pages/PersonListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/people" element={<PersonListPage />} />
        {/* <Route path="/Films" element={<FilmList />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
