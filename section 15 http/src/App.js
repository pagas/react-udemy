import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://swapi.dev/api/films', {})

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseJSON = await response.json();
      setMovies(responseJSON.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      })))
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])

  let content = <p>Found no movies.</p>;
  if (movies.length === 0) {
    content = <p>No movies.</p>;
  } else {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (loading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies </button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
