import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './_Header.scss';

class Header extends Component {
  state = {
    redirect: false,
  };

  onLogout = () => {
    this.props.logoutUser();
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) return <Redirect to="/" />;
  };

  render() {
    const { currentUser } = this.props;
    return (
      <>
        {this.renderRedirect()}
        <header className="header">
          <h1 className="title">Movie Tracker</h1>
          <div className="login-container">
            {!currentUser && (
              <Link to="/login" className="header-link">
                Log in
              </Link>
            )}
            {currentUser && (
              <div className="user-container">
                <p className="user-welcome">Hi, {currentUser.name}</p>
                <a className="header-link" onClick={this.onLogout}>
                  Log out
                </a>
              </div>
            )}
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

Header.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
