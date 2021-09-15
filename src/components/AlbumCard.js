import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { artistSearch:
        { artistName, collectionName, artworkUrl100, collectionId } } = this.props;
    return (
      <div key={ collectionId }>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img src={ artworkUrl100 } alt="Imagem do album" />
          <p>{ collectionName }</p>
          <p>{ artistName }</p>
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = PropTypes.shape({
  artistName: PropTypes.string,
  collectionId: PropTypes.number,
  collectionName: PropTypes.string,
  artworkUrl100: PropTypes.string,
}).isRequired;

export default AlbumCard;
