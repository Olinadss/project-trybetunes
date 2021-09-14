import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.invokeCreateUser = this.invokeCreateUser.bind(this);

    this.state = {
      nameInput: '',
      loading: false,
      redirect: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  async invokeCreateUser() {
    const { nameInput } = this.state;
    this.setState({
      loading: true,
    });
    const userCreate = await createUser({ name: nameInput });
    this.setState({
      loading: false,
      redirect: userCreate,
    });
  }

  render() {
    const { nameInput, loading, redirect } = this.state;
    const numberCharacters = 2;
    if (loading) {
      return <Loading />;
    }

    if (redirect) {
      return <Redirect to="/search" />;
    }

    return (
      <div data-testid="page-login">
        <input
          data-testid="login-name-input"
          type="text"
          name="nameInput"
          onChange={ this.handleChange }
        />
        <button
          data-testid="login-submit-button"
          type="button"
          disabled={ nameInput.length <= numberCharacters }
          onClick={ () => this.invokeCreateUser() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
