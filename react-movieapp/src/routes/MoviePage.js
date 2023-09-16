import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./MoviePage.module.css";

const KEY = "8eca3d304c4f33b2f17497dffd27d5ba";
const movieURL = "https://api.themoviedb.org/3/movie/popular?api_key=";

function MoviePage() {
  // state
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // function
  const getMovies = async () => {
    const json = await (await fetch(`${movieURL}${KEY}&language=ko-KR`)).json();
    setMovies(json.results);
    setLoading(false);
  };

  //useEffect
  useEffect(() => {
    getMovies();
  }, []);

  // return
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading..</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              overview={movie.overview}
              poster={movie.poster_path}
              title={movie.title}
              vote={`⭐${movie.vote_average.toFixed(1)}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MoviePage;
