import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const getImg = `https://image.tmdb.org/t/p/`;

function Movie({ id, poster, title, overview, vote }) {
  return (
    <div className={styles.movie}>
      <img
        src={`${getImg}w200/${poster}`}
        alt={title}
        className={styles.movie__img}
      />
      <div className={styles.movie__title__box}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movie__vote}>{vote}</p>
      </div>
      <p className={styles.movie__overview}>
        {overview.length > 200 ? `${overview.slice(0, 200)}...` : `${overview}`}
      </p>
    </div>
  );
}

Movie.PropType = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Movie;
