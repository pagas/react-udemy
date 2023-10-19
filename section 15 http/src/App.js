import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovieHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/films', {

      })
      const responseJSON = await response.json();
      setLoading(false);

      setMovies(responseJSON.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      })))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies {loading && 'Loading...'}</button>

      </section>
      <section>

        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
