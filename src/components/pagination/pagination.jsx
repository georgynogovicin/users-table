import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageCount, currentPage, onChangePage }) => {
  const changePageHandler = (page) => {
    onChangePage(page);
  };

  const pageItems = [];
  for (let i = 1; i < pageCount + 1; i++) {
    const item = (
      <li key={i} className={`page-item ${i === currentPage && 'active'}`}>
        <button type="button" className="page-link" onClick={() => changePageHandler(i)}>
          {i}
        </button>
      </li>
    );
    pageItems.push(item);
  }

  return (
    <nav>
      <ul className="pagination">{pageItems}</ul>
    </nav>
  );
};

Pagination.defaultProps = {
  pageCount: 1,
  currentPage: 1,
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
