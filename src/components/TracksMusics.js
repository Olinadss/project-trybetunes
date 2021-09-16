import React from 'react';
import PropTypes from 'prop-types';

class TracksMusics extends React.Component {
  render() {
    const { musicsList:
        { artistName, collectionName, artworkUrl100 } } = this.props;
    return (
      <div key={ collectionId }>
        <img src={ artworkUrl100 } alt="Imagem do album" />
        <p data-testid="album-name">{ collectionName }</p>
        <p data-testid="artist-name">{ artistName }</p>
      </div>
    );
  }
}

TracksMusics.propTypes = ({
  artistName: PropTypes.string,
  collectionName: PropTypes.string,
  artworkUrl100: PropTypes.string,
}).isRequired;

export default TracksMusics;
