/** @format */

import React from "react";
import Row from "./component/Row";
import Banner from "./component/Banner";
import requests from "./Dependency/request";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Row
        title='Netfilx Orginals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Top action movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Top Comdey movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Top Horror movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Top Romance movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
