import React from 'react';
import './UserRating.scss';

class UserRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null
    }
  }
  render() {
    return (
      <div className="user-rating">
        <p className="rating">{this.state.rating || "Rate This"}</p>
        <i class="fas fa-thumbs-up"></i>
      </div>)
  }
}

export default UserRating;
