import React from "react";
import { movies } from "../data";

function Movies({ movies: { title, time, genres } }) {
  const MovieCard = movies.map((movies) => {
    return;
  });
  return (
    <li>
      <ul className="cards">{MovieCard}</ul>
    </li>
  );
}

export default Movies;
