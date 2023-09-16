import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./routes/FirstPage";
import MoviePage from "./routes/MoviePage";
import TVPage from "./routes/TVPage";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<FirstPage />} />
        <Route path={`/movie`} element={<MoviePage />} />
        <Route path={`/TV`} element={<TVPage />} />
        <Route path={`/movie/:id`} element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
