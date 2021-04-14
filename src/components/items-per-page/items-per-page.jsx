import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsPerPage } from '../../redux/actions/actions';
import UseOutsideClick from '../use-outside-click';

const ItemsPerPage = () => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const activeField = useSelector((state) => state.itemsPerPage);
  const usersLength = useSelector((state) => state.users.usersList.length);

  const ref = useRef(null);

  const onItemClickHandler = (value) => {
    setIsActive(false);
    const pageCount = Math.ceil(usersLength / value);
    const payload = {
      value,
      pageCount,
    };
    dispatch(setItemsPerPage(payload));
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
            checked={activeField === item}
          />
        </label>
      </div>
    );
  });

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

export default ItemsPerPage;
