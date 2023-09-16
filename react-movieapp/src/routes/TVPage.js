import { useEffect, useState } from "react";
import TVSeries from "../components/TV";

const TVURL = "https://api.themoviedb.org/3/tv/top_rated";
const KEY = "8eca3d304c4f33b2f17497dffd27d5ba";

function TVPage() {
  const [loading, setLoading] = useState(true);
  const [tv, setTV] = useState([]);

  const getTV = async () => {
    const json = await (await fetch(`${TVURL}?api_key=${KEY}`)).json();
    setTV(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getTV();
  }, []);

  console.log(tv);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          {tv.map((TVShow) => (
            <TVSeries
              key={TVShow.id}
              id={TVShow.id}
              overview={TVShow.overview}
              poster={TVShow.poster_path}
              title={TVShow.name}
              vote={`⭐${TVShow.vote_average.toFixed(1)}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TVPage;
