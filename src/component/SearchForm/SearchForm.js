import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = e => {
    setInputSearch(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputSearch);
    reset();
  };

  const reset = () => {
    setInputSearch('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={inputSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={handleInputChange}
        />
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = { onSubmit: PropTypes.func };


