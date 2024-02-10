import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/MovieServices";

const MovieHero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.topRated).then((response) => {
      const movies = response.data.results;
      const randomMovies = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovies);
    });
  }, []);

  if (!movie)
    return (
      <>
        <p>fetching movie....</p>
      </>
    );

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px] py-16">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-ful object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />

        <div className="absolute w-full top-[25%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 text-black py-2 px-5">
              play
            </button>
            <button className="capitalize border  py-2 px-5 ml-4">watch</button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:w-[75%] lg:max-w-[50%] text-gray-200">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
