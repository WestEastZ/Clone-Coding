import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const getImg = `https://image.tmdb.org/t/p/`;

function TVSeries({ id, poster, title, overview, vote }) {
  return (
    <div>
      <img src={`${getImg}w200/${poster}`} alt={title} />
      <div>
        <h2>
          <Link to={`/TV/${id}`}>{title}</Link>
        </h2>
        <p>{vote}</p>
      </div>
      <p>{overview}</p>
    </div>
  );
}

TVSeries.PropType = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default TVSeries;
