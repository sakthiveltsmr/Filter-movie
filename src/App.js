import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./Component/Movie";
import Filter from "./Component/Filter";
import { motion } from "framer-motion";
function App() {
  const [filtered, setFiltered] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [activegenre, setActivegenre] = useState(0);
  useEffect(() => {
    Fetchpopuler();
  }, [Popular]);
  const Fetchpopuler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1"
    );
    const movies = await data.json();
    // console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        Popular={Popular}
        setFiltered={setFiltered}
        activegenre={activegenre}
        setActivegenre={setActivegenre}
      />
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
