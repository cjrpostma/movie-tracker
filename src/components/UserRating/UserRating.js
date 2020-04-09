import React from 'react';
import './UserRating.scss';

class UserRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      dropdown: false
    }
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

  updateRating = (e) => {
    const rating = parseInt(e.target.dataset.value) +  1;
    this.setState({rating: rating});
  }

  render() {
    const dropdownHidden = this.state.dropdown ? "" : "hidden";
    const dropdownClasses = `ratings-dropdown ${dropdownHidden}`;
    const isUserRated = this.state.rating ? "yellow" : "";

    return (
      <div className="user-rating" onClick={() => this.toggleDropdown()}>
        <p className="rating">{this.state.rating || <span className='rate-this'>Rate This</span>}</p>
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

export default UserRating;
