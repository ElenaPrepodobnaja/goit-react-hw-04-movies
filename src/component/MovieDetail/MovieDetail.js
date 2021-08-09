import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Route, useLocation, useHistory } from 'react-router-dom';
import * as FetchMovies from '../../services/Api';
import s from './MovieDetail.module.css';
import noImage from '../../images/noImage.jpg';
import NotFound from '../NotFound';

const Cast = lazy(() => import('../Cast' /*webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "Reviews"*/),
);

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetail({ match }) {
  const [detailMovie, setDetailMovie] = useState('');
  const [status, setStatus] = useState('idle');
  const { movieId } = match.params;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setStatus('pending');
    FetchMovies.FetchAboutMovie(movieId)
      .then(movie => {
        setDetailMovie(movie);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  const { overview, poster_path, release_date, title, genres } = detailMovie;
  const genrs = genres && genres.map(genr => genr.name).join(', ');
  const releaseData = release_date && release_date.slice(0, 4);

  if (status === 'pending') {
    return <h1>Загрузка ... </h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        <div className={s.container}>
          <div className={s.wrapper}>
            <img
              className={s.poster}
              src={poster_path ? `${BASE_URL}${poster_path}` : noImage}
              alt={title}
            />
          </div>
          <div className={s.wrapper}>
            <button onClick={onGoBack} type="button">
              Назад
            </button>
            <h2 className={s.title}>{`${title} (${releaseData})`}</h2>
            <h3 className={s.preTitle}>Overview: </h3>
            <p className={s.text}>{overview}</p>
            <h3 className={s.preTitle}>Genres: </h3>
            <p className={s.text}>{genrs}</p>
          </div>
        </div>
        <div className={s.links}>
          <NavLink
            to={`${match.url}/cast`}
            className={s.base}
            activeClassName={s.active}
          >
            Cast
          </NavLink>
          <br />
          <NavLink
            to={`${match.url}/review`}
            className={s.base}
            activeClassName={s.active}
          >
            Rewiev
          </NavLink>
        </div>
        <Suspense fallback={<h1> Загрузка ... </h1>}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/review`} component={Reviews} />
        </Suspense>
      </>
    );
  }

  return <NotFound />;
}
