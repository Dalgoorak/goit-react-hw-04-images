import { useState } from 'react';
import css from './Searchbar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm__button}></button>
        <input
          className={css.SearchForm__input}
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
