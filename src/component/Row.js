/** @format */

import React, { useState, useEffect } from "react";
import axios from "../Dependency/axios";
import requests from "../Dependency/request";
import YouTube from "react-youtube";
import "./Row.css";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);
  const [trailerURL, settrailerURL] = useState("");
  const [notAvailable, setnotAvailable] = useState("");
  //condition to load the rows when we fetch all the data
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // console.log(movies);
  const handelClick = (movie) => {
    if (trailerURL || notAvailable) {
      settrailerURL("");
      setnotAvailable("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          settrailerURL(urlParam.get("v"));
        })
        .catch((error) => {
          setnotAvailable(
            "we are extremlly sorry the Trailer video is not available"
          );
        });
    }
  };
  const style = {
    textAlign: "center",
  };
  return (
    <div className='row'>
      <h2 className='row__h1'>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            alt={movie.name}
            onClick={() => handelClick(movie)}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      <p style={style}>{notAvailable}</p>
    </div>
  );
};

export default Row;
