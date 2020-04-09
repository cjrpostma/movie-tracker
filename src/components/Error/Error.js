import React from 'react';
import PropTypes from 'prop-types';
import './_Error.scss';

const Error = props => <p className="error">{props.error}</p>;

Error.propTypes = {};

export default Error;
