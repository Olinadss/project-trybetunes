import React from 'react';
import PropTypes from 'prop-types';
import TracksMusics from './TracksMusics';

class TracksListMusics extends React.Component {
  render() {
    const { musicsList } = this.props;
    return (
      <div>
        { console.log(musicsList).map((musicList) => (<TracksMusics
          key={ musicList.collectionId }
          artistSearch={ musicList }
        />))}
      </div>
    );
  }
}

TracksListMusics.propTypes = ({
  musics: PropTypes.array,
}).isRequired;

export default TracksListMusics;
