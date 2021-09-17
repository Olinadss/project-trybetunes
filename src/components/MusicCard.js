import React from 'react';
import PropTypes from 'prop-types';
// import { addSong } from '../services/favoriteSongsAPI';
// import Loading from '../pages/Loading';
import TracksMusics from './TracksMusics';

class MusicCard extends React.Component {
  render() {
    const { arrayMusic } = this.props;
    // const { loading } = this.state;
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
          <TracksMusics
            key={ music.trackId }
            musicsList={ music }
          />))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  arrayMusic: PropTypes.array,
}.isRequered;

export default MusicCard;
