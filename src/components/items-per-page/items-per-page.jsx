import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import UseOutsideClick from '../use-outside-click';

const ItemsPerPage = ({ setItemsPerPage }) => {
  const [isActive, setIsActive] = useState(false);

  const ref = useRef(null);

  const onItemClickHandler = (value) => {
    setIsActive(false);
    setItemsPerPage(value);
  };

  UseOutsideClick(ref, () => setIsActive(false));

  const items = [10, 30, 50, 100].map((item) => {
    return (
      <div key={item} className="form-check">
        <label className="form-check-label">
          {item}
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            onChange={() => onItemClickHandler(item)}
            defaultChecked={item === 10}
          />
        </label>
      </div>
    );
  });

  // return (<li key={item}><button type='button' className='dropdown-item' onClick={() => onItemClickHandler(item)} >{item} items</button></li>)
  return (
    <div ref={ref} className="col-1 dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        id="items-per-page"
        onClick={() => setIsActive(!isActive)}
      >
        Items per page
      </button>
      <ul
        className="dropdown-menu px-4 py-3"
        aria-labelledby="items-per-page"
        style={{ display: `${isActive ? 'block' : 'none'}` }}
      >
        {items}
      </ul>
    </div>
  );
};

ItemsPerPage.propTypes = {
  setItemsPerPage: PropTypes.func.isRequired,
};

export default ItemsPerPage;
