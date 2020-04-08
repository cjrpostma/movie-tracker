import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './_Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isAuthorized: false,
    };
  }

  logOutUser() {
    this.props.logoutUser();
  }

  render() {
    const { isAuthorized } = this.state;

    return (
      <header className="header">
        <h1 className="title">Movie Tracker</h1>
        <div className="login-container">
          {!isAuthorized && (
            <Link to="/login" className="header-link">
              Log in
            </Link>
          )}
          {isAuthorized && (
            <div className="user-container">
              <p className="user-welcome">Hi, Username</p>
              <Link to="/" className="header-link">
                Log out
              </Link>
            </div>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Header);
