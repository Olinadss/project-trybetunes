import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
// import { addSong } from '../services/favoriteSongsAPI';
// import Loading from '../pages/Loading';
import TracksMusics from './TracksMusics';

class MusicCard extends React.Component {
  // constructor() {
  //   super();

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.invokeAddSong = this.invokeAddSong.bind(this);

  //   this.state = {
  //     // checkedMusic: false,
  //     loading: false,
  //   };
  // }

  // componentDidMount() {
  // }

  // handleChange() {
  //   // const { checked } = target;
  //   // const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     loading: true,
  //   });
  // this.invokeAddSong();
  // }

  // async invokeAddSong() {
  //   await addSong();
  //   this.setState({
  //     loading: false,
  //   });
  // }

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
            handleChange={ this.handleChange }
          />))}
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
