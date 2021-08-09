import { useState, useEffect } from 'react';
import * as FetchMovies from '../../services/Api';
import s from './Reviews.module.css';

export default function Reviews({ match }) {
  const [reviews, setReviews] = useState('');
  console.log('review', reviews);

  useEffect(() => {
    FetchMovies.FetchReviews(match.params.movieId).then(setReviews);
  }, [match.params.movieId]);

  return (
    <>
      <h2 className={s.title}>Reviews</h2>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content ? review.content : 'No review'}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
