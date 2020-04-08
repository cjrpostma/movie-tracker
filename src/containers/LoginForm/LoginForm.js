import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../../thunks/authorizeUser';
import './_LoginForm.scss';

import Loader from '../../components/Loader/Loader';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.authorizeUser(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    const isFormComplete = email && password;

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h2 className="title">Log in</h2>
        <Link to="/">
          <button
            aria-label="Close login form"
            className="close-button"
            type="button"
          >
            <i className="far fa-times-circle"></i>
          </button>
        </Link>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            onChange={this.onChange}
            type="email"
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            onChange={this.onChange}
            type="password"
            value={password}
          />
        </label>
        {this.props.isLoading && <Loader />}
        {this.props.hasError && (
          <p className="login-error">{this.props.hasError}</p>
        )}
        <button
          className="submit-button"
          disabled={!isFormComplete}
          type="submit"
        >
          Log in
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  hasError: state.hasError,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  authorizeUser: loginData => dispatch(authorizeUser(loginData)),
});

// LoginForm.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
