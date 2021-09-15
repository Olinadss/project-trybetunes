import React from 'react';
import Header from '../components/Header';
import ListAlbuns from '../components/ListAlbuns';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.requedAPIMusic = this.requedAPIMusic.bind(this);

    this.state = {
      musicSearch: '',
      nameSearch: undefined,
      loading: false,
      artist: undefined,
      menssage: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  async requedAPIMusic() {
    const { musicSearch } = this.state;
    this.setState({
      loading: true,
      nameSearch: musicSearch,
    });
    const artistSearch = await searchAlbumsAPI(musicSearch);
    this.setState({
      musicSearch: '',
      loading: false,
      artist: artistSearch,
    });
    if (artistSearch.length === 0) {
      return this.setState({
        menssage: true,
      });
    }
  }

  render() {
    const { musicSearch, loading, artist, nameSearch, menssage } = this.state;
    const numberCharacters = 2;
    const mensageSearch = (
      <p>
        Resultado de álbuns de:
        {' '}
        {nameSearch}

      </p>);
    const inputButton = (
      <>
        <input
          type="text"
          name="musicSearch"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
          value={ musicSearch }
        />
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ musicSearch.length < numberCharacters }
          onClick={ this.requedAPIMusic }
        >
          Pesquisar
        </button>
      </>);
    return (
      <div data-testid="page-search">
        <Header />
        <div>{loading ? <Loading /> : inputButton}</div>
        <div>{nameSearch ? mensageSearch : ''}</div>
        {artist ? <ListAlbuns albuns={ artist } /> : '' }
        {menssage && <span>Nenhum álbum foi encontrado</span> }
      </div>
    );
  }
}

export default Search;
