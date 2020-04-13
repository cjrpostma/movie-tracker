import React from 'react';
import PropTypes from 'prop-types';
import './_ErrorMessage.scss';

const ErrorMessage = ({ message }) => <p className="error">Error: {message}</p>;

Error.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
