import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieDetails.scss';
import Loader from '../../components/Loader/Loader';

const MovieDetails = () => {
  return <div>test</div>
}

const mapDispatchToProps = state => ({
});

export default connect(null, mapDispatchToProps)(MovieDetails);
