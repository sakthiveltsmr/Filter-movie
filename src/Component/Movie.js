import React from "react";
import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
    </motion.div>
  );
}

export default Movie;
