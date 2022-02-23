import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
    </div>
  );
}

export default Movie;
