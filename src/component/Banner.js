/** @format */

import React, { useState, useEffect } from "react";
import axios from "../Dependency/axios";
import requests from "../Dependency/request";
import "./Banner.css";
const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>play</button>
          <button className='banner__button'>my list</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  );
};

export default Banner;
