import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import MoviesList from '../MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([ ]);

  useEffect(() => {
    Api.FetchInTrendMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return <MoviesList movies={movies} />;
}
