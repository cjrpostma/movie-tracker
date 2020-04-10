import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './MovieCard.scss';
import UserRating from '../UserRating/UserRating';

const MovieCard = ({
  avgRating,
  description,
  id,
  image,
  imageBackdrop,
  release,
  title,
  user
}) => (

    <article className="movie-card">
      <Link to={"/movies/" + id}>
        <img src={image} alt={`Poster for ${title}`} className="movie-card-image" />
      </Link>
      <div className="title-wrapper">
        <Link to={"/movies/" + id}>
          <p className="movie-card-title">{title}</p>
        </Link>
        <div className="movie-card-rating">
          <div className="avg-rating">
            <p>{avgRating.toFixed()}</p>
            <i className="fas fa-star"></i>
          </div>
          {user && <UserRating movieID={id}/>}
        </div>
      </div>
    </article>

);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MovieCard);
