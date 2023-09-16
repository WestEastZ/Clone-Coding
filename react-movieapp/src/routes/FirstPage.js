import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <div>
        <h2>
          <Link to="/movie">MOVIE</Link>
        </h2>
      </div>
      <div>
        <h2>
          <Link to="/TV">TV Serise</Link>
        </h2>
      </div>
    </div>
  );
}

export default FirstPage;
