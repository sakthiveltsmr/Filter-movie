import { useEffect } from "react";

function Filter({ setActivegenre, activegenre, setFiltered, Popular }) {
  useEffect(() => {
    if (activegenre === 0) {
      setFiltered(Popular);
      return;
    }
    const filtered = Popular.filter((movie) =>
      movie.genre_ids.includes(activegenre)
    );
    setFiltered(filtered);
  }, [activegenre]);
  return (
    <div className="filter-container">
      <button
        className={activegenre === 0 ? "active" : ""}
        onClick={() => setActivegenre(0)}
      >
        All
      </button>
      <button
        className={activegenre === 35 ? "active" : ""}
        onClick={() => setActivegenre(35)}
      >
        Comedy
      </button>
      <button
        className={activegenre === 28 ? "active" : ""}
        onClick={() => setActivegenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
