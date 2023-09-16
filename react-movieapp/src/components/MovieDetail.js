import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

const KEY = "8eca3d304c4f33b2f17497dffd27d5ba";
const URL = "https://api.themoviedb.org/3/movie/";

function MovieDetail() {
  // stast
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  // useParams
  const { id } = useParams();

  // function
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`${URL}${id}?api_key=${KEY}&language=ko-KR`)
    ).json();
    setMovie(json);
    setLoading(false);
    console.log(json);
  }, [id]);

  // useEffect
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div>
          {
            <Movie
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              vote={`⭐${movie.vote_average.toFixed(1)}`}
            />
          }
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
