import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const serverUrl = 'https://udemy-react-cd666-default-rtdb.europe-west1.firebasedatabase.app/movies.json'

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(serverUrl);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      let transformedMovies = [];
      for (const [movieId, movie] of Object.entries(data)) {
        transformedMovies.push({
          ...movie,
          id: movieId
        })
      }
      
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {

    setIsLoading(true);
    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      await fetchMoviesHandler();
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }


  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
