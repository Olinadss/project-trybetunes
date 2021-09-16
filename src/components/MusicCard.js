import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { arrayMusic } = this.props;
    const { artistName, collectionName, artworkUrl100 } = arrayMusic[0];
    return (
      <div>
        <img src={ artworkUrl100 } alt="Imagem do album" />
        <h4 data-testid="album-name">
          {collectionName}
        </h4>
        <h5 data-testid="artist-name">
          {artistName}
        </h5>
        {arrayMusic.slice(1).map((music) => (
          <section key={ music.trackId }>
            <h4>{music.trackName}</h4>
            <audio data-testid="audio-component" src={ music.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
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
  arrayMusic: PropTypes.arrayOf(
    objectOf({
      previewUrl: PropTypes.string,
      trackName: PropTypes.string,
      trackId: PropTypes.string,
    }),
  ).isRequired,
};

export default MusicCard;
