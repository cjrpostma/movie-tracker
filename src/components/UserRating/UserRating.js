import React from 'react';
import './UserRating.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestRating } from '../../thunks/requestRating';
import { getMovieRating, getRatingID } from '../../selectors';

class UserRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      dropdown: false,
      movieID: props.movieID,
    };
  }

  componentDidMount() {
    const rating = this.props.rating(this.props.movieID);
    this.setState({ rating });
  }

  componentDidUpdate() {
    if (this.state.rating != this.props.rating(this.props.movieID)) {
      const rating = this.props.rating(this.props.movieID);
      this.setState({ rating });
    }
  }

  toggleDropdown = e => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  hoverHandler = e => {
    const stars = e.target.parentElement.getElementsByClassName(
      'rating-selector'
    );
    const hoverValue = e.target.dataset.value;

    Array.from(stars).forEach(star => {
      star.style.color =
        hoverValue >= star.dataset.value ? '#ffdd00' : '#e4e4e4';
    });
  };

  updateRating = async e => {
    const newRating = parseInt(e.target.dataset.value) + 1;
    const isRated = this.props.rating(this.props.movieID);
    let ratingID;
    if (isRated) {
      ratingID = this.props.getRatingID(this.props.movieID);
    }
    await this.props.postRating(
      this.props.movieID,
      this.props.userID,
      newRating,
      ratingID
    );
  };

  render() {
    const dropdownHidden = this.state.dropdown ? '' : 'hidden';
    const dropdownClasses = `ratings-dropdown ${dropdownHidden}`;
    const isUserRated = this.state.rating ? 'yellow' : '';

    return (
      <div className="user-rating" onClick={() => this.toggleDropdown()}>
        <p className="rating">
          {this.state.rating || (
            <span className="rate-this">Rate&nbsp;This</span>
          )}
        </p>
        <i className={`fas fa-thumbs-up ${isUserRated}`}></i>
        <div className={dropdownClasses} onMouseOver={this.hoverHandler}>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="0"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="1"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="2"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="3"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="4"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="5"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="6"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="7"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="8"
            onClick={this.updateRating}
          ></i>
          <i
            className="fas fa-thumbs-up rating-selector"
            data-value="9"
            onClick={this.updateRating}
          ></i>
          <i
            className="far fa-times-circle"
            data-value={this.state.rating - 1}
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rating: id => getMovieRating(id, state.ratings),
  userID: state.user.id,
  getRatingID: movieID => getRatingID(movieID, state.ratings),
});

const mapDispatchToProps = dispatch => ({
  postRating: (movieID, userID, newRating, ratingID) =>
    dispatch(requestRating(movieID, userID, newRating, ratingID)),
});

UserRating.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserRating);
