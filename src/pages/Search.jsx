import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      musicSearch: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const { musicSearch } = this.state;
    const numberCharacters = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          name="musicSearch"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ musicSearch.length < numberCharacters }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
