import React from 'react';
import Header from '../components/Header';
import TracksMusics from '../components/TracksMusics';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();

    this.invokeGetFavoriteSongs = this.invokeGetFavoriteSongs.bind(this);

    this.state = {
      arrayFavorites: [],
    };
  }

  componentDidMount() {
    this.invokeGetFavoriteSongs();
  }

  componentDidUpdate() {
    this.invokeGetFavoriteSongs();
  }

  componentWillUnmount() {
    this.invokeGetFavoriteSongs();
  }

  // async removeFavorite() {
  //   const { favoritesMusic } = this.state;
  //   await removeSong(favoritesMusic);
  //   this.setState({
  //     checked: false,
  //   });
  // }

  async invokeGetFavoriteSongs() {
    const favoritesMusic = await getFavoriteSongs();
    this.setState({
      arrayFavorites: favoritesMusic,
    });
  }

  render() {
    const { arrayFavorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {arrayFavorites ? (
          arrayFavorites.map((music) => (<TracksMusics
            key={ music.trackId }
            musicsList={ music }
            // checkedOut={ checked }
            musicFavorite={ arrayFavorites }
          />))) : '' }

      </div>
    );
  }
}

export default Favorites;
