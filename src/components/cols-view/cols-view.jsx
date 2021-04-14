import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTableHeaders } from '../../redux/actions/actions';
import UseOutsideClick from '../use-outside-click';

const ColsView = () => {
  const [popIsActive, setPopIsActive] = useState(false);

  const dispatch = useDispatch();

  const colons = useSelector((state) => state.tableHeaders);

  const onChangeHandler = (label) => {
    const newColons = colons.map((item) => (item.label === label ? { ...item, status: !item.status } : item));
    dispatch(setTableHeaders(newColons));
  };

  const ref = useRef(null);

  UseOutsideClick(ref, () => setPopIsActive(false));

  const items = colons.map((item) => {
    return (
      <div key={item.label} className="form-check">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.label}
            checked={item.status}
            onChange={() => onChangeHandler(item.label)}
          />
          {item.label.toUpperCase()}
        </label>
      </div>
    );
  });

  return (
    <div ref={ref} className="col-1 dropdown mx-5">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        id="items-per-page"
        onClick={() => setPopIsActive(!popIsActive)}
      >
        Table colons
      </button>
      <div
        className="dropdown-menu px-4 py-3"
        aria-labelledby="items-per-page"
        style={{ display: `${popIsActive ? 'block' : 'none'}` }}
      >
        {items}
      </div>
    </div>
  );
};

export default ColsView;
