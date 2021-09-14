import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.captureNameUser = this.captureNameUser.bind(this);

    this.state = {
      nameUser: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.captureNameUser();
  }

  async captureNameUser() {
    this.setState({
      loading: true,
    });
    const userName = await getUser();
    this.setState({
      nameUser: userName,
      loading: false,
    });
  }

  render() {
    const { nameUser, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <header data-testid="header-component">
        <nav>
          <Link data-testid="link-to-search" to="/search">
            Pesquisa
          </Link>
          <Link data-testid="link-to-favorites" to="/favorites">
            Favoritas
          </Link>
          <Link data-testid="link-to-profile" to="/profile">
            Perfil
          </Link>
        </nav>
        <span data-testid="header-user-name">
          {nameUser.name}
        </span>
      </header>
    );
  }
}

export default Header;
