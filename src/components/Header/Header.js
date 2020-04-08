import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isAuthorized: false,
    };
  }

  logOutUser() {
    this.props.logOutUser();
  }

  // TODO Will need to refactor this to allow the global store to hold the authorization status. Then it can be passed in as props and this can be made into a functional component.

  // TODO Will need to mapStateToProps to bring in the user's name

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

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch( logOutUser() )
})

export default connect(null, mapDispatchToProps)(Header);
