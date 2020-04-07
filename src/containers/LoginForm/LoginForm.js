import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { authorizeUser } from "../../thunks/authorizeUser";
import './_LoginForm.scss';

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
    console.log('test');
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
        <button
          aria-label="Close login form"
          className="close-button"
          type="button"
        >
          <i className="far fa-times-circle"></i>
        </button>
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

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: loginData => dispatch( authorizeUser(loginData) )
})

// LoginForm.propTypes = {}

export default connect(null, mapDispatchToProps)(LoginForm);
