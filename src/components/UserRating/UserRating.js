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
      console.log('hover', hoverValue);
      console.log('star', star.dataset.value);
      star.style.color = hoverValue >= star.dataset.value ? "#ffdd00" : '#e4e4e4';
    });
  }

  render() {
    const dropdownHidden = this.state.dropdown ? "" : "hidden";
    const dropdownClasses = `ratings-dropdown ${dropdownHidden}`;

    return (
      <div className="user-rating" onClick={() => this.toggleDropdown()}>
        <p className="rating">{this.state.rating || "Rate This"}</p>
        <i className="fas fa-thumbs-up"></i>
        <div className={dropdownClasses} onMouseOver={this.hoverHandler}>
          <i className="fas fa-thumbs-up rating-selector" data-value="0"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="1"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="2"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="3"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="4"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="5"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="6"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="7"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="8"></i>
          <i className="fas fa-thumbs-up rating-selector" data-value="9"></i>
          <i className="far fa-times-circle"></i>
        </div>
      </div>)
  }
}

export default UserRating;
