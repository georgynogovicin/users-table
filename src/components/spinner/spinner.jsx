import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <strong>Loading...</strong>
      <div className="spinner-border spinner-border-large m-5" role="status" aria-hidden="true" />
    </div>
  );
};

export default Spinner;
