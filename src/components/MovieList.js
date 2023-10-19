import { useState } from "react";
import { tempMovieData } from "../App";
import { Movie } from "./Movie";

export function MovieList({ onSelectMovie }) {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
