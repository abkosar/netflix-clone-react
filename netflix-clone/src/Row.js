import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [] run once when the row loads, and dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            // key is for only rendering what needs to be rendered. If only one movie changes it'll re-render just that one instead of the whole row
            key={movie.id}
            // if the row is a large row also assign row__posterLarge class name
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            // if the row is not a large row then instead of the movie poster, use the backdrop path (thumbnail)
            src={`${baseImageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
