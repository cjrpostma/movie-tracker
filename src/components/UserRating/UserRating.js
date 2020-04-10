import React from 'react';
import './UserRating.scss';
import { connect } from 'react-redux';
import { postRating } from '../../apiCalls/postRating';
import { requestRating } from '../../thunks/requestRating';
import { getMovieRating } from '../../selectors';
import PropTypes from 'prop-types';

class UserRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [],
      dropdown: false,
      movieID: props.movieID,
    }
  }

  componentDidUpdate() {
    console.log(this.props.ratings);
    // this.setState({rating: [...this.props.ratings]})
  }

  toggleDropdown = (e) => {
    this.setState({dropdown: !this.state.dropdown})
  }

  hoverHandler = (e) => {
    const stars = e.target.parentElement.getElementsByClassName('rating-selector');
    const hoverValue = e.target.dataset.value;

    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? "#ffdd00" : '#e4e4e4';
    });
  }

  updateRating = async (e) => {
    const newRating = parseInt(e.target.dataset.value) +  1;

    const updatedRating = await postRating(this.props.movieID, this.props.user.id, newRating);
    this.setState({rating: updatedRating});
  }

  render() {
    const dropdownHidden = this.state.dropdown ? "" : "hidden";
    const dropdownClasses = `ratings-dropdown ${dropdownHidden}`;
    const isUserRated = this.state.rating ? "yellow" : "";

    return (
      <div className="user-rating" onClick={() => this.toggleDropdown()}>
        <p className="rating">{this.state.rating || <span className='rate-this'>Rate&nbsp;This</span>}</p>
        <i className={"fas fa-thumbs-up " + isUserRated}></i>
        <div className={dropdownClasses} onMouseOver={this.hoverHandler}>
          <i className="fas fa-thumbs-up rating-selector" data-value="0" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="1" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="2" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="3" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="4" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="5" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="6" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="7" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="8" onClick={this.updateRating}></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="9" onClick={this.updateRating}></i>
          <i className="far fa-times-circle" data-value={this.state.rating - 1}></i>
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({
  user: state.user,
  ratings: state.ratings,
})

const mapDispatchToProps = dispatch => ({
  postRating: () => dispatch(requestRating())
})

UserRating.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRating);
