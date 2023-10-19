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
      setMovies(responseJSON.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      })))
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies </button>

      </section>
      <section>

        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>Found no movies.</p>}
        {loading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
