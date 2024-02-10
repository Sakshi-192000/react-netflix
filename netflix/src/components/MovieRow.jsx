import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieRow = ({ title, url }) => {
  const [movie, setMovie] = useState([]);
  const rowId = Math.floor(Math.random() * 1000);
  useEffect(() => {
    axios.get(url).then((response) => setMovie(response.data.results));
  }, [url]);

  // console.log(movie);
  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };
  return (
    <>
      <h2 className="font-bold md:text-xl p-4 capitalize">{title}</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movie.map((movies) => (
            <MovieItem movie={movies} key={movies.id} />
          ))}
        </div>
        <FaChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer "
          size={40}
        />
      </div>
    </>
  );
};

export default MovieRow;
