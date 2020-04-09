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

  render() {
    const dropdownHidden = this.state.dropdown ? "" : "hidden";
    const dropdownClasses = `ratings-dropdown ${dropdownHidden}`;

    return (
      <div className="user-rating" onClick={() => this.toggleDropdown()}>
        <p className="rating">{this.state.rating || "Rate This"}</p>
        <i className="fas fa-thumbs-up"></i>
        <div className={dropdownClasses}>
          <i className="fas fa-thumbs-up" data-value="1"></i>
          <i className="fas fa-thumbs-up" data-value="2"></i>
          <i className="fas fa-thumbs-up" data-value="3"></i>
          <i className="fas fa-thumbs-up" data-value="4"></i>
          <i className="fas fa-thumbs-up" data-value="5"></i>
          <i className="fas fa-thumbs-up" data-value="6"></i>
          <i className="fas fa-thumbs-up" data-value="7"></i>
          <i className="fas fa-thumbs-up" data-value="8"></i>
          <i className="fas fa-thumbs-up" data-value="9"></i>
          <i className="fas fa-thumbs-up" data-value="10"></i>
          <i className="far fa-times-circle"></i>
        </div>
      </div>)
  }
}

export default UserRating;
