import React from 'react';
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
        <span data-testid="header-user-name">
          {nameUser.name}
        </span>
      </header>
    );
  }
}

export default Header;
