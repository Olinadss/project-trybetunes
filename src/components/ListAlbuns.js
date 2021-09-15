import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class ListAlbuns extends React.Component {
  render() {
    const { albuns } = this.props;
    return (
      <div>
        { albuns.map((albunsList) => (<AlbumCard
          key={ albuns.collectionId }
          artistSearch={ albunsList }
        />))}
      </div>
    );
  }
}

ListAlbuns.propTypes = ({
  albuns: PropTypes.array,
}).isRequired;

export default ListAlbuns;
