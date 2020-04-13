import React from 'react';

const Loader = () => (
  <div
    className="fa-3x"
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="status"
  >
    <i className="fas fa-spinner fa-spin"></i>
  </div>
);

export default Loader;
