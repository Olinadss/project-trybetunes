import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class TracksMusics extends React.Component {
  constructor() {
    super();

    this.alteraChecked = this.alteraChecked.bind(this);

    this.state = {
      checked: false,
      loading: false,
    };
  }

  async alteraChecked() {
    const { checked } = this.state;
    const { musicsList } = this.props;
    this.setState({
      loading: true,
    });
    if (!checked) {
      await addSong(musicsList);
      this.setState({
        checked: true,
        loading: false,
      });
    } else {
      await removeSong(musicsList);
      this.setState({
        checked: false,
        loading: false,
      });
    }
  }

  render() {
    const { checked, loading } = this.state;
    const { musicsList:
      { trackName, trackId, previewUrl } } = this.props;
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
              <input
                type="checkbox"
                id={ `checkbox-${trackName}` }
                name="checkedMusic"
                checked={ checked }
                onClick={ this.alteraChecked }
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
