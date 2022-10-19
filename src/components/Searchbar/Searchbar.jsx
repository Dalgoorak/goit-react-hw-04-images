import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class SearchBar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm__button}></button>
          <input
            className={css.SearchForm__input}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
