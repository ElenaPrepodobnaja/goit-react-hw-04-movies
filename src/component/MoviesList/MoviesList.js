import { Link, useLocation } from 'react-router-dom';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
              {movie.title ?? movie.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
