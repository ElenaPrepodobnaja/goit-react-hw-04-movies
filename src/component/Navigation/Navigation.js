import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink exact to="/" className={s.base} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/movies" className={s.base} activeClassName={s.active}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}


