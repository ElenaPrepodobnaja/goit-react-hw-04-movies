import { useState, useEffect } from 'react';
import * as FetchMovies from '../../services/Api';
import noImage from '../../images/noImage.jpg';
import s from './Cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Casts({ match }) {
  const [actors, setActors] = useState([ ]);
  useEffect(() => {
    FetchMovies.FetchActors(match.params.movieId).then(setActors);
  }, [match.params.movieId]);

  return (
    <>
      <h2 className={s.title}>Cast</h2>
      <ul className={s.list}>
        {actors &&
          actors.map(actor => (
            <li className={s.item} key={actor.id}>
              <img
                className={s.photo}
                src={
                  actor.profile_path
                    ? `${BASE_URL}${actor.profile_path}`
                    : noImage
                }
                alt={actor.name}
              />
              <p className={s.name}>{actor.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
