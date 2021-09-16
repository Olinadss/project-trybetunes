import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { arrayMusic } = this.props;
    return (
      <div>
        {arrayMusic.slice(1).map((music) => (
          <section key={ music.trackId }>
            <img src={ music.artworkUrl100 } alt="Imagem do album" />
            <h5
              data-testid="artist-name"
            >
              {music.artistName}
            </h5>
            <audio data-testid="audio-component" src={ music.previewUrl } controls>
              <track kind="captions" />
              <code>audio</code>
              .
            </audio>

          </section>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  arrayMusic: PropTypes.array,
}.isRequered;

export default MusicCard;
