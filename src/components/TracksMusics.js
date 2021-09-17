import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class TracksMusics extends React.Component {
  constructor() {
    super();

    this.alteraChecked = this.alteraChecked.bind(this);
    this.invokeGetFavoriteSongs = this.invokeGetFavoriteSongs.bind(this);

    this.state = {
      loading: false,
      arrayFavorites: [],
    };
  }

  componentDidMount() {
    this.invokeGetFavoriteSongs();
  }

  async invokeGetFavoriteSongs() {
    // this.setState({
    // });
    const favoritesMusic = await getFavoriteSongs();
    this.setState({
      arrayFavorites: favoritesMusic,
    });
  }

  async alteraChecked() {
    const { arrayFavorites } = this.state;
    const { musicsList } = this.props;
    const verificaMusicFavorite = arrayFavorites
      .some((music) => music.trackName === musicsList.trackName);
    console.log('esta é a musica', verificaMusicFavorite);
    this.setState({
      loading: true,
    });
    if (verificaMusicFavorite) {
      await removeSong(musicsList);
      const teste = await getFavoriteSongs();
      console.log('Remove pelo amor Deus', teste);
      this.setState({
        loading: false,
        arrayFavorites: teste,
      });
    } else {
      await addSong(musicsList);
      const teste = await getFavoriteSongs();
      console.log('pára adicionar', teste);
      this.setState({
        loading: false,
        arrayFavorites: teste,
      });
    }
  }

  render() {
    const { loading, arrayFavorites } = this.state;
    const { musicsList:
      { trackName, trackId, previewUrl } } = this.props;
    // const checkedValue = checkedOut || checked;
    const verificaMusicFavorite = arrayFavorites
      .some((music) => music.trackName === trackName);
    return (
      loading ? <Loading />
        : (
          <section key={ trackId }>
            <h4>{trackName}</h4>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label
              htmlFor={ `checkbox-${trackName}` }
              data-testid={ `checkbox-music-${trackId}` }
            >
              Favorita
              <input
                type="checkbox"
                id={ `checkbox-${trackName}` }
                name="checkedMusic"
                checked={ verificaMusicFavorite }
                onChange={ this.alteraChecked }
              />
            </label>
          </section>
        )
    );
  }
}

TracksMusics.propTypes = ({
  artistName: PropTypes.string,
  collectionName: PropTypes.string,
  artworkUrl100: PropTypes.string,
}).isRequired;

export default TracksMusics;
