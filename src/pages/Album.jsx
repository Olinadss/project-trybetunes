import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.requedGetMusics = this.requedGetMusics.bind(this);

    const { match: { params: { id } } } = this.props;

    this.state = {
      id,
      tracksMusics: undefined,
      requered: false,
    };
  }

  componentDidMount() {
    this.requedGetMusics();
  }

  async requedGetMusics() {
    const { id, requered } = this.state;
    if (requered === false) {
      const tracksList = await getMusics(id);
      this.setState({
        tracksMusics: tracksList,
        requered: true,
      });
    }
  }

  render() {
    const { tracksMusics, requered } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {/* <div>
          <h4
            data-testid="album-name"
          >
            {requered ? tracksMusics[0].collectionName : ''}
          </h4>
          <h5 data-testid="artist-name">{requered ? tracksMusics[0].artistName : ''}</h5>
        </div> */}
        {requered ? <MusicCard arrayMusic={ tracksMusics } /> : ''}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
