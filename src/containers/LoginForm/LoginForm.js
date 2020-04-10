import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../../thunks/authorizeUser';
import { requestRatings } from '../../thunks/requestRatings';
import { hasErrored } from '../../actions';
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

  onSubmit = async e => {
    e.preventDefault();
    let user = await this.props.authorizeUser(this.state);
    await this.props.requestRatings(user.id);
    this.setState({
      email: '',
      password: '',
    });
  };

  renderRedirect = () => {
    if (this.props.user) return <Redirect to="/" />;
  };

  render() {
    const { email, password } = this.state;
    const isFormComplete = email && password;

    return (
      <>
        {this.renderRedirect()}
        <form className="login-form" onSubmit={this.onSubmit}>
          <h2 className="title">Log in</h2>
          <Link to="/">
            <button
              aria-label="Close login form"
              className="close-button"
              onClick={() => this.props.hasErrored(null)}
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  hasError: state.hasError,
  isLoading: state.isLoading,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  authorizeUser: loginData => dispatch(authorizeUser(loginData)),
  hasErrored: errorStatus => dispatch(hasErrored(errorStatus)),
  requestRatings: userID => dispatch(requestRatings(userID)),
});

LoginForm.propTypes = {
  hasError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  authorizeUser: PropTypes.func.isRequired,
  hasErrored: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
